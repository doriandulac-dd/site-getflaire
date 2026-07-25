"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";
import { BlogPostSummary, getLatestBlogPosts } from "@/lib/blog";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";

const BLOG_BASE_URL = "https://blog.getflaire.fr/blog";

const formatDate = (dateString: string) =>
  new Date(dateString).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

const BlogSection = () => {
  const scope = useRef<HTMLElement>(null);
  const [posts, setPosts] = useState<BlogPostSummary[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setError(null);
        setPosts(await getLatestBlogPosts(3));
      } catch (fetchError) {
        console.error("Erreur lors du chargement des articles Supabase:", fetchError);
        setError("Les articles sont temporairement indisponibles.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchPosts();
  }, []);

  useGSAP(
    () => {
      if (!posts.length || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        ScrollTrigger.refresh();
        return;
      }
      gsap.from("[data-blog-card]", {
        autoAlpha: 0,
        y: 38,
        duration: 0.78,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: "[data-blog-grid]",
          start: "top 78%",
          once: true,
        },
      });
      ScrollTrigger.refresh();
    },
    { scope, dependencies: [posts.length], revertOnUpdate: true }
  );

  return (
    <section ref={scope} className="bg-white py-24 lg:py-32">
      <div className="site-shell">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <p className="section-kicker">Le terrain évolue</p>
            <h2 className="section-title mt-5 max-w-4xl">Conseils et actualités immobilières.</h2>
          </div>
          <a
            href="https://blog.getflaire.fr"
            className="inline-flex items-center gap-2 self-start border-b border-[#B56600] pb-2 text-sm font-extrabold text-[#B56600] lg:self-auto"
          >
            Tous les articles
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        {isLoading && (
          <div className="mt-14 grid min-h-[28rem] animate-pulse gap-5 lg:grid-cols-3">
            <div className="bg-[#EDF1F4] lg:col-span-2" />
            <div className="bg-[#EDF1F4]" />
          </div>
        )}

        {!isLoading && error && (
          <div className="mt-14 border-y border-[#DDE4EA] py-16 text-center text-[#778DA9]">{error}</div>
        )}

        {!isLoading && !error && posts.length > 0 && (
          <div data-blog-grid className="mt-14 grid border-y border-[#DDE4EA] lg:grid-cols-3">
            {posts.map((post, index) => {
              const category = post.categories?.[0]?.name || "Blog";
              const articleUrl = `${BLOG_BASE_URL}/${post.slug}`;
              return (
                <article
                  key={post.id}
                  data-blog-card
                  className={`group flex flex-col py-8 lg:p-8 ${
                    index > 0 ? "border-t border-[#DDE4EA] lg:border-l lg:border-t-0" : ""
                  } ${index === 0 ? "lg:col-span-1" : ""}`}
                >
                  <a href={articleUrl} className="relative block aspect-[4/3] overflow-hidden bg-[#E7ECF0]">
                    {post.featured_image_url && (
                      <img
                        src={post.featured_image_url}
                        alt={post.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      />
                    )}
                    <span className="absolute left-4 top-4 bg-[#101722] px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.1em] text-white">
                      {category}
                    </span>
                  </a>
                  <div className="mt-6 flex items-center gap-4 text-[11px] font-bold text-[#778DA9]">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5" />
                      {formatDate(post.published_at)}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" />
                      5 min
                    </span>
                  </div>
                  <h3 className="mt-4 text-xl font-extrabold leading-snug text-[#101722] transition-colors group-hover:text-[#B56600]">
                    <a href={articleUrl}>{post.title}</a>
                  </h3>
                  <p className="mt-3 line-clamp-3 leading-7 text-[#6F8097]">{post.excerpt}</p>
                  <a
                    href={articleUrl}
                    aria-label={`Lire ${post.title}`}
                    className="mt-6 inline-flex items-center gap-2 self-start text-sm font-extrabold text-[#B56600]"
                  >
                    Lire l’article
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </a>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogSection;
