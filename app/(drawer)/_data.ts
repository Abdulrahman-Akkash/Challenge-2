export type PostType = "blog" | "ev" | "kisa";

export const posts = [
  {
    id: "p1",
    type: "blog" as PostType,
    author: "Hifertility",
    date: "2024-06-20 11:06",
    title: "Uyku ve Doğurganlık Arasındaki İlişki",
    excerpt:
      "Sağlıklı bir yaşamın gereksinimlerinden biri olan uyku olgusu ruhu, zihni ve bedeni...",
    body:
      "Buraya uzun blog içeriği gelecek.\n\nParagraf paragraf yazabilirsin.",
    image:
      "https://images.unsplash.com/photo-1520201163981-8cc95007dd2a?auto=format&fit=crop&w=1200&q=60",
    likes: 4,
    comments: 0,
    views: 28,
  },
  {
    id: "p2",
    type: "kisa" as PostType,
    author: "Hifertility",
    date: "2024-06-10 10:56",
    title: "Neden Yaşam Tarzımızı İyileştirmeliyiz?",
    excerpt:
      "Fetal programlanma, anne karnında olumsuz çevresel şartlara maruz kalan fetüsün...",
    body:
      "Kısa bilgiler / uzun metin içeriği.\n\nDevamı burada.",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=60",
    likes: 12,
    comments: 2,
    views: 80,
  },
  {
    id: "p3",
    type: "ev" as PostType,
    author: "Hifertility",
    date: "2024-04-16 13:51",
    title: "Doğurganlığı arttırıcı beslenme alışveriş listenizi hazırlayın",
    excerpt:
      "Aylık alışveriş listenizi bu sefer doğurganlığı arttırıcı besinler göz önünde bulundurarak hazırlayın...",
    body:
      "Ödev açıklaması detay alanı.\n\n- Maddeler\n- Yapılacaklar\n- Notlar",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=60",
    likes: 4,
    comments: 0,
    views: 28,
  },
];

export const notifications = [
  { id: "n1", text: "Uyku hijyen günlüğünüzü tutmayı unutmayın", date: "2024-06-09 10:56", icon: "mail-outline" as const },
  { id: "n2", text: "Dengeli ve düzenli beslenmenin gebelik şansımı artırdığının farkındayım", date: "2024-05-20 12:00", icon: "nutrition-outline" as const },
  { id: "n3", text: "Bugün doğurganlığınızı artırmak için hangi besinleri tüketeceksiniz?", date: "2024-05-20 11:45", icon: "leaf-outline" as const },
  { id: "n4", text: "Anket kısmındaki ölçeklerimizi henüz çözmediniz mi* bekliyoruzzzzzz", date: "2024-05-20 11:43", icon: "clipboard-outline" as const },
];

export const courses = [
  {
    id: "c1",
    title: "Ders-1",
    sectionTitle: "Egzersiz",
    banner: "https://images.unsplash.com/photo-1525097487452-6278ff080c31?auto=format&fit=crop&w=1200&q=60",
    lessons: [
      { id: "l1", title: "Ders-1", duration: "09:51", videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" },
      { id: "l2", title: "Ders-2", duration: "09:37", videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" },
      { id: "l3", title: "Ders-3", duration: "10:22", videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4" },
    ],
  },
  {
    id: "c2",
    title: "Ders-2",
    sectionTitle: "Doğurganlık Masalı",
    banner: "https://images.unsplash.com/photo-1554311884-415bfda6f5de?auto=format&fit=crop&w=1200&q=60",
    lessons: [
      { id: "l1", title: "Ders-1", duration: "02:36", videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4" },
      { id: "l2", title: "Ders-2", duration: "04:39", videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4" },
      { id: "l3", title: "Ders-3", duration: "04:05", videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" },
    ],
  },
];

export const forumTopics = [
  { id: "t1", title: "Merhaba", body: "Bu bir demo konu.", date: "2024-06-01" },
  { id: "t2", title: "Beslenme", body: "Doğurganlık için öneriler?", date: "2024-06-10" },
];
export default function _DataRoute() {
  return null;
}