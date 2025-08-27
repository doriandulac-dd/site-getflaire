"use client";

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Plus, Edit, Trash2, Eye, Save, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  published_at: string;
  slug: string;
  image_url?: string;
  published: boolean;
}

interface PostForm {
  title: string;
  excerpt: string;
  content: string;
  author: string;
  slug: string;
  image_url: string;
  published: boolean;
}

export default function AdminBlog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [formData, setFormData] = useState<PostForm>({
    title: '',
    excerpt: '',
    content: '',
    author: 'Équipe GetFlaire',
    slug: '',
    image_url: '',
    published: false
  });

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch('/api/admin/posts');
      if (response.ok) {
        const data = await response.json();
        setPosts(data);
      }
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
      ...(name === 'title' && { slug: generateSlug(value) })
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const url = editingPost ? `/api/admin/posts/${editingPost.id}` : '/api/admin/posts';
      const method = editingPost ? 'PUT' : 'POST';
      
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          published_at: formData.published ? new Date().toISOString() : null
        }),
      });

      if (response.ok) {
        await fetchPosts();
        resetForm();
        alert(editingPost ? 'Article modifié avec succès !' : 'Article créé avec succès !');
      } else {
        alert('Erreur lors de la sauvegarde');
      }
    } catch (error) {
      console.error('Error saving post:', error);
      alert('Erreur lors de la sauvegarde');
    }
  };

  const handleEdit = (post: BlogPost) => {
    setEditingPost(post);
    setFormData({
      title: post.title,
      excerpt: post.excerpt,
      content: post.content,
      author: post.author,
      slug: post.slug,
      image_url: post.image_url || '',
      published: post.published
    });
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Êtes-vous sûr de vouloir supprimer cet article ?')) {
      return;
    }

    try {
      const response = await fetch(`/api/admin/posts/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        await fetchPosts();
        alert('Article supprimé avec succès !');
      } else {
        alert('Erreur lors de la suppression');
      }
    } catch (error) {
      console.error('Error deleting post:', error);
      alert('Erreur lors de la suppression');
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      excerpt: '',
      content: '',
      author: 'Équipe GetFlaire',
      slug: '',
      image_url: '',
      published: false
    });
    setEditingPost(null);
    setShowForm(false);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-[#1B263B]">
                Administration du Blog
              </h1>
              <p className="text-[#778DA9] mt-2">
                Gérez vos articles de blog
              </p>
            </div>
            
            <Button
              onClick={() => setShowForm(true)}
              className="bg-[#FFB23F] hover:bg-[#FF8F00] text-white"
            >
              <Plus className="mr-2 h-4 w-4" />
              Nouvel article
            </Button>
          </div>

          {/* Form Modal */}
          {showForm && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
              <div className="bg-white rounded-2xl p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-[#1B263B]">
                    {editingPost ? 'Modifier l\'article' : 'Nouvel article'}
                  </h2>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={resetForm}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-[#1B263B] mb-2">
                        Titre *
                      </label>
                      <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FFB23F] focus:border-transparent"
                        placeholder="Titre de l'article"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#1B263B] mb-2">
                        Slug *
                      </label>
                      <input
                        type="text"
                        name="slug"
                        value={formData.slug}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FFB23F] focus:border-transparent"
                        placeholder="slug-de-l-article"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-[#1B263B] mb-2">
                        Auteur *
                      </label>
                      <input
                        type="text"
                        name="author"
                        value={formData.author}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FFB23F] focus:border-transparent"
                        placeholder="Nom de l'auteur"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#1B263B] mb-2">
                        URL de l'image
                      </label>
                      <input
                        type="url"
                        name="image_url"
                        value={formData.image_url}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FFB23F] focus:border-transparent"
                        placeholder="https://example.com/image.jpg"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#1B263B] mb-2">
                      Extrait *
                    </label>
                    <textarea
                      name="excerpt"
                      value={formData.excerpt}
                      onChange={handleInputChange}
                      required
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FFB23F] focus:border-transparent resize-vertical"
                      placeholder="Résumé de l'article (affiché dans la liste)"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#1B263B] mb-2">
                      Contenu *
                    </label>
                    <textarea
                      name="content"
                      value={formData.content}
                      onChange={handleInputChange}
                      required
                      rows={12}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FFB23F] focus:border-transparent resize-vertical font-mono text-sm"
                      placeholder="Contenu HTML de l'article - Exemple:
<h2>Titre de section</h2>
<p>Paragraphe avec du texte. Utilisez <strong>strong</strong> pour mettre en gras.</p>
<ul>
  <li>Premier élément de liste</li>
  <li>Deuxième élément</li>
</ul>"
                    />
                    <div className="text-xs text-[#778DA9] mt-2 space-y-1">
                      <p><strong>Formatage HTML recommandé :</strong></p>
                      <p>• Titres : &lt;h2&gt;Titre&lt;/h2&gt; ou &lt;h3&gt;Sous-titre&lt;/h3&gt;</p>
                      <p>• Paragraphes : &lt;p&gt;Votre texte&lt;/p&gt;</p>
                      <p>• Gras : &lt;strong&gt;texte important&lt;/strong&gt;</p>
                      <p>• Listes : &lt;ul&gt;&lt;li&gt;élément&lt;/li&gt;&lt;/ul&gt;</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name="published"
                      checked={formData.published}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    <label className="text-sm font-medium text-[#1B263B]">
                      Publier l'article
                    </label>
                  </div>

                  <div className="flex justify-end space-x-4">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={resetForm}
                    >
                      Annuler
                    </Button>
                    <Button
                      type="submit"
                      className="bg-[#FFB23F] hover:bg-[#FF8F00] text-white"
                    >
                      <Save className="mr-2 h-4 w-4" />
                      {editingPost ? 'Modifier' : 'Créer'}
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* Posts List */}
          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#FFB23F] mx-auto"></div>
              <p className="text-[#778DA9] mt-4">Chargement des articles...</p>
            </div>
          ) : (
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-medium text-[#1B263B]">Titre</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-[#1B263B]">Auteur</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-[#1B263B]">Statut</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-[#1B263B]">Date</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-[#1B263B]">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {posts.map((post) => (
                      <tr key={post.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <div>
                            <div className="font-medium text-[#1B263B]">{post.title}</div>
                            <div className="text-sm text-[#778DA9] truncate max-w-xs">
                              {post.excerpt}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-[#778DA9]">
                          {post.author}
                        </td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                            post.published 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {post.published ? 'Publié' : 'Brouillon'}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-[#778DA9]">
                          {post.published_at ? formatDate(post.published_at) : '-'}
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex space-x-2">
                            {post.published && (
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => window.open(`/blog/${post.slug}`, '_blank')}
                              >
                                <Eye className="h-4 w-4" />
                              </Button>
                            )}
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleEdit(post)}
                            >
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleDelete(post.id)}
                              className="text-red-600 hover:text-red-700"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              {posts.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-[#778DA9]">Aucun article trouvé</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </main>
  );
}