import { ScrollMotion } from "@/component/motion";
import { CommonHero, PageCTA } from "@/component/shared";
import {
  getAllArticleSlugs,
  getArticleBySlug,
  getRelatedArticles,
} from "@/data/blogArticles";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  CheckCircle,
  Clock,
  Share2,
  Tag,
  User,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// Generate static params for all articles
export async function generateStaticParams() {
  const slugs = getAllArticleSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Article Not Found | GyneClinics",
    };
  }

  return {
    title: `${article.title} | Blog | GyneClinics`,
    description: article.excerpt,
  };
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = getRelatedArticles(slug);
  const ArticleIcon = article.icon;

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <CommonHero
        title={article.title}
        subtitle={article.excerpt}
        images={[article.image]}
        breadcrumbs={[
          { label: "Blog", href: "/blog" },
          { label: article.title, href: `/blog/${article.slug}` },
        ]}
      />

      {/* Article Metadata Bar */}
      <section className="bg-gradient-to-r from-primary to-secondary py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-6 text-white text-sm">
            <div className="flex items-center gap-2">
              <div
                className={`w-10 h-10 rounded-full bg-gradient-to-br ${article.categoryColor} flex items-center justify-center`}
              >
                <ArticleIcon size={20} />
              </div>
              <span className="font-semibold">{article.category}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={18} />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={18} />
              <span>{article.readTime}</span>
            </div>
            <div className="flex items-center gap-2">
              <User size={18} />
              <span>{article.author.name}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <ScrollMotion animation="fadeInUp">
              <div className="prose prose-lg max-w-none mb-12">
                <p className="text-xl text-gray-700 leading-relaxed">
                  {article.content.introduction}
                </p>
              </div>
            </ScrollMotion>

            {/* Content Sections */}
            {article.content.sections.map((section, index) => (
              <ScrollMotion key={index} animation="slideUp" delay={index * 0.1}>
                <div className="mb-12">
                  <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-secondary text-white flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    {section.heading}
                  </h2>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    {section.content}
                  </p>
                  {section.bulletPoints && (
                    <div className="space-y-4 ml-4">
                      {section.bulletPoints.map((point, i) => (
                        <div key={i} className="flex items-start gap-4">
                          <CheckCircle
                            size={24}
                            className="text-secondary flex-shrink-0 mt-1"
                          />
                          <p className="text-gray-700 leading-relaxed">
                            {point}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </ScrollMotion>
            ))}

            {/* Conclusion */}
            <ScrollMotion animation="fadeInUp">
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 md:p-12 mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                  Conclusion
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {article.content.conclusion}
                </p>
              </div>
            </ScrollMotion>

            {/* Author Bio */}
            <ScrollMotion animation="fadeInUp">
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 mb-12">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-2xl font-bold">
                      {article.author.name.charAt(0)}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-primary mb-2">
                      {article.author.name}
                    </h3>
                    <p className="text-secondary font-semibold mb-3">
                      {article.author.role}
                    </p>
                    <p className="text-gray-600">
                      Expert in {article.category.toLowerCase()} with years of
                      experience helping women achieve optimal health and
                      wellbeing.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollMotion>

            {/* Tags and Related Topics */}
            <ScrollMotion animation="fadeInUp">
              <div className="mb-12">
                <div className="flex flex-wrap gap-3 mb-6">
                  <Tag size={20} className="text-primary" />
                  {article.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold hover:bg-primary hover:text-white transition-colors cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {article.relatedTopics.length > 0 && (
                  <div>
                    <h4 className="text-lg font-bold text-primary mb-4">
                      Related Services:
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {article.relatedTopics.map((topic, index) => (
                        <Link
                          key={index}
                          href="/general-gynaecology"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-semibold hover:bg-secondary hover:text-white transition-colors"
                        >
                          {topic}
                          <ArrowRight size={14} />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </ScrollMotion>

            {/* Share Section */}
            <ScrollMotion animation="fadeInUp">
              <div className="flex items-center justify-between p-6 bg-gray-50 rounded-xl mb-12">
                <div className="flex items-center gap-3">
                  <Share2 size={24} className="text-primary" />
                  <span className="font-semibold text-gray-700">
                    Share this article
                  </span>
                </div>
                <div className="flex gap-3">
                  <button className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center hover:bg-blue-600 transition-colors">
                    f
                  </button>
                  <button className="w-10 h-10 rounded-full bg-blue-400 text-white flex items-center justify-center hover:bg-blue-500 transition-colors">
                    t
                  </button>
                  <button className="w-10 h-10 rounded-full bg-blue-700 text-white flex items-center justify-center hover:bg-blue-800 transition-colors">
                    in
                  </button>
                </div>
              </div>
            </ScrollMotion>

            {/* Back to Blog */}
            <ScrollMotion animation="fadeInUp">
              <div className="text-center">
                <Link
                  href="/general-gynaecology"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary border-2 border-primary rounded-full font-semibold hover:bg-primary hover:text-white transition-all shadow-md hover:shadow-lg"
                >
                  <ArrowLeft size={18} />
                  Back to All Articles
                </Link>
              </div>
            </ScrollMotion>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <ScrollMotion animation="fadeInUp">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                    Related Articles
                  </h2>
                  <div className="w-20 h-1 bg-secondary rounded-full mx-auto"></div>
                </div>
              </ScrollMotion>

              <div className="grid md:grid-cols-3 gap-8">
                {relatedArticles.map((relatedArticle, index) => {
                  const RelatedIcon = relatedArticle.icon;
                  return (
                    <ScrollMotion
                      key={relatedArticle.id}
                      animation="slideUp"
                      delay={index * 0.1}
                    >
                      <Link
                        href={`/blog/${relatedArticle.slug}`}
                        className="group block h-full"
                      >
                        <article className="h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden border border-gray-100">
                          {/* Image */}
                          <div className="relative h-48 overflow-hidden">
                            <Image
                              src={relatedArticle.image}
                              alt={relatedArticle.title}
                              fill
                              className="object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white text-xs">
                              <div
                                className={`w-8 h-8 rounded-full bg-gradient-to-br ${relatedArticle.categoryColor} flex items-center justify-center`}
                              >
                                <RelatedIcon size={16} />
                              </div>
                              <span className="font-semibold">
                                {relatedArticle.category}
                              </span>
                            </div>
                          </div>

                          {/* Content */}
                          <div className="p-6">
                            <div className="flex items-center gap-4 text-gray-500 text-xs mb-3">
                              <span className="flex items-center gap-1">
                                <Calendar size={12} />
                                {relatedArticle.date}
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock size={12} />
                                {relatedArticle.readTime}
                              </span>
                            </div>
                            <h3 className="text-lg font-bold text-primary mb-3 group-hover:text-secondary transition-colors line-clamp-2">
                              {relatedArticle.title}
                            </h3>
                            <p className="text-sm text-gray-600 line-clamp-3 mb-4">
                              {relatedArticle.excerpt}
                            </p>
                            <div className="flex items-center text-secondary font-semibold text-sm group-hover:gap-3 transition-all">
                              Read Article
                              <ArrowRight size={16} className="ml-2" />
                            </div>
                          </div>
                        </article>
                      </Link>
                    </ScrollMotion>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <PageCTA
        title="Have Questions About Your Health?"
        description="Book a confidential consultation with our expert team. We're here to provide personalized care and answer all your questions."
        variant="primary"
      />
    </main>
  );
}
