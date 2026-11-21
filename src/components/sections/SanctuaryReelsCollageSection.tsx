import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Volume2, VolumeX, Heart, MessageCircle, Share2, Bookmark, ExternalLink, X, Sparkles, CheckCircle2 } from 'lucide-react';
import { useSanctuaryStories } from '../../hooks/useAaramamApi';
import { resolveMediaUrl } from '../../lib/apiClient';

interface ReelItem {
  id: string;
  type: 'video' | 'photo';
  title: string;
  category: 'Postnatal' | 'Therapy' | 'Doctor Insight' | 'Sanctuary Life' | string;
  thumbnail: string;
  videoUrl?: string;
  instagramUrl?: string;
  isYouTube?: boolean;
  youTubeId?: string | null;
  duration?: string;
  views?: string;
  likes: number;
  commentsCount: number;
  author: string;
  authorHandle: string;
  avatar: string;
  audioTrack: string;
  caption: string;
  timeAgo: string;
  comments: Array<{ user: string; text: string; time: string }>;
}

export function getYouTubeVideoId(url?: string | null): string | null {
  if (!url) return null;
  const match = url.match(
    /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=|shorts\/))([\w-]{11})/
  );
  return match ? match[1] : null;
}

export const SanctuaryReelsCollageSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'video' | 'photo'>('all');
  const [selectedReel, setSelectedReel] = useState<ReelItem | null>(null);
  const [likedMap, setLikedMap] = useState<Record<string, boolean>>({});
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const fallbackReelsData: ReelItem[] = [
    {
      id: 'reel-1',
      type: 'video',
      title: 'Morning Uruli Decoctions & Nilavilakku',
      category: 'SANCTUARY LIFE',
      thumbnail: '/images/treatment_mother_care_1794639745090.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=zQliNsaUpIo',
      instagramUrl: 'https://www.instagram.com/extechnology.in/',
      isYouTube: true,
      youTubeId: 'zQliNsaUpIo',
      duration: '0:45',
      views: '18.4K views',
      likes: 1540,
      commentsCount: 62,
      author: 'Aaramam Ayurveda',
      authorHandle: '@aaramamayurveda',
      avatar: '/aaramam-logo.png',
      audioTrack: '♫ Temple Bells of Kerala',
      caption: 'Every dawn begins with the sacred lighting of the bronze Nilavilakku and fresh Neem Thailam vessels gently simmering in traditional Uruli vessels. 🪔🌿',
      timeAgo: '7d ago',
      comments: [
        { user: 'ananya_menon', text: 'My stay after delivery was truly the best decision ever! Truly restorative.', time: '1d' },
        { user: 'dr.jishna_ayurveda', text: 'Preserving these sacred healing traditions for every mother ✨', time: '18h' },
      ],
    },
    {
      id: 'reel-2',
      type: 'video',
      title: 'Ayurvedic Cosmetology & Postpartum Radiance',
      category: 'DOCTOR INSIGHT',
      thumbnail: 'https://img.youtube.com/vi/zQliNsaUpIo/hqdefault.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=zQliNsaUpIo&t=1s',
      instagramUrl: 'https://www.instagram.com/extechnology.in/',
      isYouTube: true,
      youTubeId: 'zQliNsaUpIo',
      duration: '0:58',
      views: '27.7K views',
      likes: 2310,
      commentsCount: 78,
      author: 'Dr. Reshna Jayaraj',
      authorHandle: '@dr.reshma_ayurveda',
      avatar: '/Dr%20Reshna.jpg.jpeg',
      audioTrack: '♫ Vital Prana Rhythm',
      caption: 'Restoring natural skin radiance and holistic maternal vitality through customized Njavara lepam and Vata-pacifying rituals. 🌿🌸',
      timeAgo: '1w ago',
      comments: [
        { user: 'kavitha_raj', text: 'Doctor, your guidance during our stay meant the world to us!', time: '3d' },
        { user: 'neha_wellness', text: 'Such clear and practical scientific explanations of ancient Ayurveda.', time: '2d' },
      ],
    },
    {
      id: 'photo-1',
      type: 'photo',
      title: 'Sacred Botanical Decoctions',
      category: 'Sanctuary Life',
      thumbnail: '/images/treatment_panchakarma_1794639720577.jpg',
      instagramUrl: 'https://www.instagram.com/aaramamayurveda',
      likes: 1840,
      commentsCount: 62,
      author: 'Aaramam Sanctuary',
      authorHandle: '@aaramamayurveda',
      avatar: '/aaramam-logo.png',
      audioTrack: '♫ Temple Bells of Kerala',
      caption: 'Pure therapeutic purity with Western Ghats roots slowly simmering in traditional bronze vessels. 🍃',
      timeAgo: '5d ago',
      comments: [
        { user: 'rahul_panicker', text: 'The aroma of the herbs in the morning is unforgettable.', time: '4d' },
      ],
    },
    {
      id: 'reel-3',
      type: 'video',
      title: 'The Calming Art of Shirodhara',
      category: 'Therapy',
      thumbnail: '/images/treatment_shirodhara_1794639618350.jpg',
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyBlazes.mp4',
      instagramUrl: 'https://www.instagram.com/aaramamayurveda',
      duration: '0:38',
      views: '64.2K views',
      likes: 5930,
      commentsCount: 284,
      author: 'Aaramam Ayurveda',
      authorHandle: '@aaramamayurveda',
      avatar: '/aaramam-logo.png',
      audioTrack: '♫ Meditative Water Stream & Drone',
      caption: 'A continuous, rhythmic stream of medicated Ksheerabala thailam over the Ajna chakra. Melting away anxiety and fatigue. 💧🧘',
      timeAgo: '1w ago',
      comments: [
        { user: 'sreedevi_warrier', text: 'Transcendent experience! My sleep was completely restored.', time: '5d' },
      ],
    },
  ];

  const { data: storiesData } = useSanctuaryStories();

  const activeReelsList: ReelItem[] = React.useMemo(() => {
    if (storiesData && storiesData.length > 0) {
      return storiesData.map((story) => {
        const ytId = getYouTubeVideoId(story.video_url);
        const isVideo = Boolean(story.video_url) || (story.media_type as string) !== 'photo';

        // Robust thumbnail resolution: backend image -> YouTube HQ poster -> Doctor image -> Fallback
        let thumbnail = story.image ? resolveMediaUrl(story.image) : '';
        if (!thumbnail && ytId) {
          thumbnail = `https://img.youtube.com/vi/${ytId}/hqdefault.jpg`;
        }
        if (!thumbnail) {
          if (story.account_handle?.toLowerCase().includes('reshma') || story.account_handle?.toLowerCase().includes('reshna')) {
            thumbnail = '/Dr%20Reshna.jpg.jpeg';
          } else if (story.account_handle?.toLowerCase().includes('jishna')) {
            thumbnail = '/Dr%20Jishna.jpg.jpeg';
          } else {
            thumbnail = '/images/treatment_mother_care_1794639745090.jpg';
          }
        }

        // Author details
        let avatar = '/aaramam-logo.png';
        let author = 'Aaramam Sanctuary';
        const handleLower = (story.account_handle || '').toLowerCase();
        if (handleLower.includes('reshma') || handleLower.includes('reshna')) {
          avatar = '/Dr%20Reshna.jpg.jpeg';
          author = 'Dr. Reshna Jayaraj';
        } else if (handleLower.includes('jishna')) {
          avatar = '/Dr%20Jishna.jpg.jpeg';
          author = 'Dr. Mrs. Jishna Jayaraj';
        }

        // Comments list
        const comments = (story.comments && story.comments.length > 0)
          ? story.comments.map((c) => ({ user: c.user, text: c.text, time: c.time || '1d' }))
          : [
              { user: 'ananya_menon', text: 'Watching these sacred rituals brings back all the warmth of our stay! 🌿', time: '1d' },
              { user: 'dr.jishna_ayurveda', text: 'Preserving authentic Kerala Ayurveda with great devotion ✨', time: '18h' },
            ];

        return {
          id: `story-${story.id}`,
          type: isVideo && story.video_url ? 'video' : (story.media_type === 'photo' ? 'photo' : 'video'),
          title: story.title,
          category: story.badge_tag || 'SANCTUARY LIFE',
          thumbnail,
          videoUrl: story.video_url || undefined,
          instagramUrl: story.instagram_post_url || 'https://www.instagram.com/extechnology.in/',
          isYouTube: Boolean(ytId),
          youTubeId: ytId,
          duration: '0:45',
          views: `${((story.likes_count || 120) * 12).toLocaleString()} views`,
          likes: story.likes_count || 120,
          commentsCount: story.comments_count || comments.length,
          author,
          authorHandle: story.account_handle || '@aaramamayurveda',
          avatar,
          audioTrack: story.location_or_audio ? `♫ ${story.location_or_audio}` : '♫ Traditional Audio • Aaramam Sanctuary',
          caption: story.caption,
          timeAgo: story.time_ago_text || 'Recently',
          comments,
        };
      });
    }
    return fallbackReelsData;
  }, [storiesData]);

  const filteredReels = activeReelsList.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.type === activeFilter;
  });

  const videoCount = activeReelsList.filter((item) => item.type === 'video').length;
  const photoCount = activeReelsList.filter((item) => item.type === 'photo').length;

  const toggleLike = (id: string, e?: React.MouseEvent) => {
    e?.stopPropagation();
    setLikedMap((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const selectedYouTubeId = selectedReel ? (selectedReel.youTubeId || getYouTubeVideoId(selectedReel.videoUrl)) : null;

  return (
    <section className="pt-4 sm:pt-6 md:pt-8 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 lg:px-12 bg-[#dae3d8] relative overflow-hidden">
      {/* Decorative Background Lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#fae788]/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#112314]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-14"
        >
          {/* Instagram Tag Badge */}
          <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full bg-white/80 border border-[#1b3420]/15 shadow-sm backdrop-blur-md">
            <div className="w-5 h-5 rounded-md bg-gradient-to-tr from-[#feda75] via-[#fa7e1e] to-[#d62976] flex items-center justify-center p-0.5 shadow-sm text-white">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </div>
            <span className="text-xs font-heading font-bold text-[#112314] uppercase tracking-wider">
              @aaramamayurveda on Instagram
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-[#132415] tracking-tight">
            Sanctuary Reels &amp; <br />
            <span className="font-serif italic font-normal text-[#2b4c2f]">Living Healing Stories</span>
          </h2>
          
          <p className="text-sm sm:text-base text-[#405643] leading-relaxed max-w-2xl mx-auto">
            Experience the daily rhythms of Aaramam: authentic postnatal mother bonding, physician consultations by Dr. Mrs. Jishna Jayaraj &amp; Dr. Reshna Jayaraj, and classical therapies captured live in Feroke, Kozhikode.
          </p>

          {/* Follow Button & Filter Pills */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://www.instagram.com/extechnology.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#112314] via-[#1a3820] to-[#112314] text-[#fae788] text-xs font-heading font-bold uppercase tracking-wider shadow-md hover:brightness-110 transition-all"
            >
              <span>Follow on Instagram</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#d4a034]" />
            </a>

            <div className="inline-flex p-1 rounded-full bg-white/70 border border-[#1b3420]/15">
              <button
                onClick={() => setActiveFilter('all')}
                className={`px-4 py-1.5 rounded-full text-xs font-heading font-bold transition-all cursor-pointer ${
                  activeFilter === 'all'
                    ? 'bg-[#112314] text-[#fae788] shadow-sm'
                    : 'text-[#354f38] hover:text-[#112314]'
                }`}
              >
                All Stories ({activeReelsList.length})
              </button>
              <button
                onClick={() => setActiveFilter('video')}
                className={`px-4 py-1.5 rounded-full text-xs font-heading font-bold transition-all cursor-pointer ${
                  activeFilter === 'video'
                    ? 'bg-[#112314] text-[#fae788] shadow-sm'
                    : 'text-[#354f38] hover:text-[#112314]'
                }`}
              >
                Reels ({videoCount})
              </button>
              <button
                onClick={() => setActiveFilter('photo')}
                className={`px-4 py-1.5 rounded-full text-xs font-heading font-bold transition-all cursor-pointer ${
                  activeFilter === 'photo'
                    ? 'bg-[#112314] text-[#fae788] shadow-sm'
                    : 'text-[#354f38] hover:text-[#112314]'
                }`}
              >
                Photos ({photoCount})
              </button>
            </div>
          </div>
        </motion.div>

        {/* Instagram Collage Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredReels.map((item, idx) => {
            const isLiked = likedMap[item.id];
            const currentLikes = item.likes + (isLiked ? 1 : 0);

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setSelectedReel(item)}
                className="group relative rounded-[32px] overflow-hidden bg-[#112314] shadow-[0_12px_36px_rgba(20,40,24,0.12)] border border-[#1b3420]/15 cursor-pointer flex flex-col justify-between aspect-[9/13] sm:aspect-[9/13.5]"
              >
                {/* Background Image / Reel Video Poster */}
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    onError={(e) => {
                      if (item.youTubeId) {
                        e.currentTarget.src = `https://img.youtube.com/vi/${item.youTubeId}/hqdefault.jpg`;
                      } else {
                        e.currentTarget.src = '/images/treatment_mother_care_1794639745090.jpg';
                      }
                    }}
                    className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 brightness-[0.9]"
                  />
                  {/* Instagram Gradient Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/30 to-black/60 pointer-events-none" />
                </div>

                {/* Top Header Row on Card */}
                <div className="relative z-10 p-5 flex items-center justify-between text-white">
                  {/* Clickable Author Pill */}
                  <a
                    href={item.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center space-x-2.5 bg-black/45 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/15 hover:border-[#fae788]/60 transition-colors"
                    title={`View ${item.authorHandle} on Instagram`}
                  >
                    <img
                      src={item.avatar}
                      alt={item.author}
                      className="w-5 h-5 rounded-full object-cover bg-white/20"
                    />
                    <span className="text-xs font-heading font-bold text-white tracking-wide">
                      {item.authorHandle}
                    </span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#3897f0] fill-[#3897f0] text-white" />
                  </a>

                  {/* Reel Indicator Pill */}
                  <div className="flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-[11px] font-heading font-bold uppercase tracking-wider text-white">
                    {item.type === 'video' ? (
                      <>
                        <Play className="w-3 h-3 fill-current text-[#fae788]" />
                        <span>Reel</span>
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-3 h-3 text-[#fae788]" />
                        <span>Story</span>
                      </>
                    )}
                  </div>
                </div>

                {/* Center Play Button for Video Reels */}
                {item.type === 'video' && (
                  <div className="relative z-10 flex items-center justify-center pointer-events-none">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-black/45 backdrop-blur-md border border-white/30 text-white flex items-center justify-center group-hover:scale-115 group-hover:bg-[#112314]/85 group-hover:text-[#fae788] group-hover:border-[#fae788] transition-all shadow-xl">
                      <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-current ml-1" />
                    </div>
                  </div>
                )}

                {/* Bottom Card Meta & Caption */}
                <div className="relative z-10 p-5 space-y-3 text-white">
                  {/* Views & Category */}
                  <div className="flex items-center justify-between text-xs text-[#fae788]">
                    <span className="font-heading font-bold uppercase tracking-wider bg-white/10 px-2.5 py-0.5 rounded-md backdrop-blur-sm">
                      {item.category}
                    </span>
                    {item.views && (
                      <span className="font-medium text-white/80">
                        {item.views}
                      </span>
                    )}
                  </div>

                  {/* Reel Title & Excerpt */}
                  <div>
                    <h4 className="font-heading font-bold text-base sm:text-lg text-white leading-snug drop-shadow-md">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#d8e5d6] line-clamp-2 mt-1 leading-relaxed font-sans font-normal">
                      {item.caption}
                    </p>
                  </div>

                  {/* Audio Track */}
                  <p className="text-[11px] text-[#fae788] truncate flex items-center space-x-1 font-medium">
                    <span>{item.audioTrack}</span>
                  </p>

                  {/* Bottom Stats: Likes, Comments & Direct Instagram Action */}
                  <div className="pt-2 border-t border-white/15 flex items-center justify-between text-xs">
                    <div className="flex items-center space-x-4">
                      {/* Like button */}
                      <button
                        onClick={(e) => toggleLike(item.id, e)}
                        className="flex items-center space-x-1.5 hover:text-[#ff3040] transition-colors cursor-pointer"
                        aria-label="Like reel"
                      >
                        <Heart className={`w-4 h-4 ${isLiked ? 'fill-[#ff3040] text-[#ff3040]' : 'text-white'}`} />
                        <span>{currentLikes.toLocaleString()}</span>
                      </button>

                      {/* Comment count */}
                      <div className="flex items-center space-x-1.5 text-white/90">
                        <MessageCircle className="w-4 h-4 text-white" />
                        <span>{item.commentsCount}</span>
                      </div>
                    </div>

                    <a
                      href={item.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-[11px] text-[#fae788] hover:underline flex items-center space-x-1"
                    >
                      <span>{item.timeAgo}</span>
                      <ExternalLink className="w-3 h-3 text-[#fae788]" />
                    </a>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Full-Screen Instagram Reel Modal with Autoplay */}
      <AnimatePresence>
        {selectedReel && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-black/85 backdrop-blur-xl">
            {/* Backdrop click dismiss */}
            <div
              className="absolute inset-0"
              onClick={() => setSelectedReel(null)}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 w-full max-w-4xl max-h-[92vh] bg-[#112314] rounded-[32px] overflow-hidden border border-[#d4a034]/40 shadow-2xl flex flex-col md:flex-row"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedReel(null)}
                className="absolute top-4 right-4 z-30 w-9 h-9 rounded-full bg-black/60 text-white hover:text-[#fae788] flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close reel modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Left Side: Video Player with Reliable Autoplay */}
              <div className="w-full md:w-[54%] bg-black relative flex items-center justify-center min-h-[360px] md:min-h-[560px]">
                {selectedReel.type === 'video' && selectedReel.videoUrl ? (
                  selectedYouTubeId ? (
                    /* Responsive YouTube Embed with Instant Autoplay & Controls */
                    <div className="relative w-full h-full min-h-[360px] md:min-h-[560px] flex items-center justify-center bg-black">
                      <iframe
                        key={`yt-${selectedReel.id}-${selectedYouTubeId}`}
                        src={`https://www.youtube.com/embed/${selectedYouTubeId}?autoplay=1&mute=0&loop=1&playlist=${selectedYouTubeId}&playsinline=1&controls=1&modestbranding=1&rel=0`}
                        title={selectedReel.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        className="w-full h-full min-h-[360px] md:min-h-[560px] border-0"
                      />
                    </div>
                  ) : (
                    /* Direct HTML5 Video Player with Autoplay */
                    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                      <video
                        key={selectedReel.id}
                        src={selectedReel.videoUrl}
                        poster={selectedReel.thumbnail}
                        autoPlay={isPlaying}
                        loop
                        muted={isMuted}
                        playsInline
                        className="w-full h-full max-h-[560px] object-cover object-center"
                      />

                      {/* In-Video Controls */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />

                      <div className="absolute top-4 left-4 z-20 flex items-center space-x-2">
                        <button
                          onClick={() => setIsMuted(!isMuted)}
                          className="w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80 transition-colors cursor-pointer"
                          aria-label="Toggle mute"
                        >
                          {isMuted ? <VolumeX className="w-4 h-4 text-white" /> : <Volume2 className="w-4 h-4 text-[#fae788]" />}
                        </button>
                      </div>

                      <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between text-white text-xs">
                        <button
                          onClick={() => setIsPlaying(!isPlaying)}
                          className="px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md flex items-center space-x-1.5 hover:bg-black/80 transition-colors cursor-pointer"
                        >
                          <Play className="w-3.5 h-3.5 fill-current text-[#fae788]" />
                          <span>{isPlaying ? 'Pause' : 'Play'}</span>
                        </button>

                        <span className="font-heading font-bold text-[#fae788]">
                          {selectedReel.views || 'Reel'}
                        </span>
                      </div>
                    </div>
                  )
                ) : (
                  /* High-Res Photo View */
                  <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                    <img
                      src={selectedReel.thumbnail}
                      alt={selectedReel.title}
                      className="w-full h-full max-h-[560px] object-cover object-center"
                    />
                  </div>
                )}
              </div>

              {/* Right Side: Instagram Style Profile & Comments */}
              <div className="w-full md:w-[46%] p-6 sm:p-7 flex flex-col justify-between text-white space-y-4 overflow-y-auto">
                {/* Author Info & Follow Link */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center space-x-3">
                    <img
                      src={selectedReel.avatar}
                      alt={selectedReel.author}
                      className="w-10 h-10 rounded-full object-cover bg-white/20 border border-[#d4a034]/40"
                    />
                    <div>
                      <div className="flex items-center space-x-1">
                        <span className="font-heading font-bold text-sm text-white">
                          {selectedReel.author}
                        </span>
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#3897f0] fill-[#3897f0] text-white" />
                      </div>
                      <span className="text-xs text-[#fae788]">Feroke, Kozhikode</span>
                    </div>
                  </div>

                  <a
                    href={selectedReel.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 text-xs font-heading font-bold text-[#fae788] border border-[#d4a034]/30 transition-colors"
                  >
                    Follow
                  </a>
                </div>

                {/* Caption & Comments List */}
                <div className="flex-1 space-y-4 overflow-y-auto pr-1 text-xs">
                  <div>
                    <span className="font-bold text-white mr-1.5">{selectedReel.authorHandle}</span>
                    <span className="text-[#cfded0] leading-relaxed">{selectedReel.caption}</span>
                    <p className="text-[11px] text-[#fae788] mt-2 font-medium">
                      #AaramamSanctuary #PostnatalCare #AyurvedaFeroke #KeralaAyurveda #HolisticHealth
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/10 space-y-3">
                    <span className="font-heading font-bold text-[11px] uppercase tracking-wider text-[#9eb6a0] block">
                      Guest Reflections ({selectedReel.comments.length})
                    </span>

                    {selectedReel.comments.map((c, i) => (
                      <div key={i} className="space-y-0.5">
                        <div className="flex items-baseline space-x-1.5">
                          <span className="font-bold text-white">{c.user}</span>
                          <span className="text-[10px] text-white/50">{c.time}</span>
                        </div>
                        <p className="text-[#d8e5d6] leading-relaxed">{c.text}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Modal Footer Actions & Direct Links */}
                <div className="pt-4 border-t border-white/10 space-y-3">
                  <div className="flex items-center justify-between text-white">
                    <div className="flex items-center space-x-4">
                      <button
                        onClick={() => toggleLike(selectedReel.id)}
                        className="cursor-pointer hover:text-[#ff3040] transition-colors"
                        aria-label="Like reel"
                      >
                        <Heart className={`w-5 h-5 ${likedMap[selectedReel.id] ? 'fill-[#ff3040] text-[#ff3040]' : 'text-white'}`} />
                      </button>
                      <button className="cursor-pointer hover:text-[#fae788] transition-colors" aria-label="Comment">
                        <MessageCircle className="w-5 h-5" />
                      </button>
                      <button className="cursor-pointer hover:text-[#fae788] transition-colors" aria-label="Share">
                        <Share2 className="w-5 h-5" />
                      </button>
                    </div>
                    <button className="cursor-pointer hover:text-[#fae788] transition-colors" aria-label="Save">
                      <Bookmark className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="text-xs">
                    <span className="font-bold text-white">
                      {(selectedReel.likes + (likedMap[selectedReel.id] ? 1 : 0)).toLocaleString()} likes
                    </span>
                    <span className="text-white/50 ml-2">{selectedReel.timeAgo}</span>
                  </div>

                  {/* Connected Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-2.5 pt-1">
                    <a
                      href={selectedReel.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-3 px-4 rounded-full bg-gradient-to-r from-[#d4a034] via-[#fae788] to-[#b18137] text-[#112314] font-heading font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 shadow-md hover:brightness-105 transition-all"
                    >
                      <span>View on Instagram</span>
                      <ExternalLink className="w-3.5 h-3.5 text-[#112314]" />
                    </a>

                    {selectedReel.videoUrl && (
                      <a
                        href={selectedReel.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-3 px-4 rounded-full bg-white/10 hover:bg-white/20 text-[#fae788] border border-[#d4a034]/30 font-heading font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 transition-all"
                      >
                        <span>Watch Video</span>
                        <ExternalLink className="w-3.5 h-3.5 text-[#fae788]" />
                      </a>
                    )}
                  </div>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
