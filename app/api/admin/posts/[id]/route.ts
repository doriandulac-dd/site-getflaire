import { NextResponse } from 'next/server';

// Mock data for demonstration - replace with Supabase integration
let mockPosts = [
  {
    id: '1',
    title: 'Les tendances du marché immobilier en 2025',
    excerpt: 'Découvrez les principales évolutions du marché immobilier français et comment adapter votre stratégie de prospection.',
    content: `
      <h2>Introduction</h2>
      <p>Le marché immobilier français connaît des évolutions importantes en 2025. Entre les nouvelles réglementations, l'évolution des taux d'intérêt et les changements comportementaux des acheteurs, il est essentiel de comprendre ces tendances pour adapter sa stratégie.</p>
      
      <h2>Les principales tendances</h2>
      <h3>1. Digitalisation accrue</h3>
      <p>La digitalisation du secteur immobilier s'accélère. Les visites virtuelles, les signatures électroniques et les outils de prospection automatisés comme GetFlaire deviennent indispensables.</p>
      
      <h3>2. Évolution des critères d'achat</h3>
      <p>Les acheteurs privilégient désormais la performance énergétique, la proximité des transports en commun et les espaces extérieurs.</p>
      
      <h2>Comment s'adapter ?</h2>
      <p>Pour rester compétitif, il est crucial d'investir dans les bons outils et de comprendre les nouvelles attentes des clients. GetFlaire vous aide à automatiser votre veille et à identifier les meilleures opportunités.</p>
    `,
    author: 'Équipe GetFlaire',
    published_at: '2025-01-15T10:00:00Z',
    slug: 'tendances-marche-immobilier-2025',
    image_url: 'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=800',
    published: true
  },
  {
    id: '2',
    title: 'Comment optimiser sa prospection immobilière',
    excerpt: 'Techniques et outils pour améliorer votre efficacité commerciale et signer plus de mandats.',
    content: `
      <h2>L'importance de la prospection</h2>
      <p>La prospection est le nerf de la guerre dans l'immobilier. Sans un flux constant de nouveaux prospects, même le meilleur négociateur ne peut pas performer.</p>
      
      <h2>Les méthodes traditionnelles</h2>
      <p>Le porte-à-porte, les appels téléphoniques et le démarchage restent efficaces mais chronophages. Il faut les optimiser avec les bons outils.</p>
      
      <h2>L'automatisation avec GetFlaire</h2>
      <p>GetFlaire révolutionne la prospection en automatisant la veille du marché. Plus besoin de passer des heures à chercher des opportunités, l'outil vous alerte en temps réel.</p>
      
      <h2>Conseils pratiques</h2>
      <ul>
        <li>Définissez des critères précis pour vos alertes</li>
        <li>Suivez vos concurrents</li>
        <li>Analysez les tendances de votre secteur</li>
        <li>Personnalisez vos approches client</li>
      </ul>
    `,
    author: 'Marie Dubois',
    published_at: '2025-01-10T14:30:00Z',
    slug: 'optimiser-prospection-immobiliere',
    image_url: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800',
    published: true
  },
  {
    id: '3',
    title: 'L\'importance de la veille concurrentielle',
    excerpt: 'Pourquoi surveiller ses concurrents est essentiel et comment le faire efficacement.',
    content: `
      <h2>Qu'est-ce que la veille concurrentielle ?</h2>
      <p>La veille concurrentielle consiste à surveiller les activités de vos concurrents pour identifier les opportunités et les menaces sur votre marché.</p>
      
      <h2>Pourquoi c'est crucial ?</h2>
      <p>Dans un marché concurrentiel comme l'immobilier, connaître les stratégies de vos concurrents vous donne un avantage décisif.</p>
      
      <h2>Comment faire de la veille efficacement ?</h2>
      <p>GetFlaire intègre des fonctionnalités de surveillance concurrentielle qui vous permettent de :</p>
      <ul>
        <li>Suivre les nouvelles annonces de vos concurrents</li>
        <li>Analyser leurs stratégies tarifaires</li>
        <li>Identifier leurs points forts et faibles</li>
        <li>Adapter votre positionnement en conséquence</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>La veille concurrentielle n'est plus un luxe mais une nécessité. Avec les bons outils, elle devient un avantage compétitif majeur.</p>
    `,
    author: 'Thomas Martin',
    published_at: '2025-01-05T09:15:00Z',
    slug: 'importance-veille-concurrentielle',
    image_url: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800',
    published: true
  }
];

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const body = await request.json();
    
    // TODO: Replace with actual Supabase update
    // const { data, error } = await supabase
    //   .from('posts')
    //   .update(body)
    //   .eq('id', id)
    //   .select()
    //   .single();

    // if (error) throw error;

    const postIndex = mockPosts.findIndex(p => p.id === id);
    if (postIndex === -1) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }

    mockPosts[postIndex] = {
      ...mockPosts[postIndex],
      ...body,
      published_at: body.published ? (mockPosts[postIndex].published_at || new Date().toISOString()) : null
    };

    return NextResponse.json(mockPosts[postIndex]);
  } catch (error) {
    console.error('Error updating post:', error);
    return NextResponse.json({ error: 'Failed to update post' }, { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    
    // TODO: Replace with actual Supabase delete
    // const { error } = await supabase
    //   .from('posts')
    //   .delete()
    //   .eq('id', id);

    // if (error) throw error;

    const postIndex = mockPosts.findIndex(p => p.id === id);
    if (postIndex === -1) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }

    mockPosts.splice(postIndex, 1);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting post:', error);
    return NextResponse.json({ error: 'Failed to delete post' }, { status: 500 });
  }
}