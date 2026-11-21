import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, MessageSquarePlus, X, CheckCircle2, Loader2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { PageHero } from '../components/common/PageHero';
import { CountUp } from '../components/common/CountUp';
import { CustomerReviewsSection } from '../components/sections/CustomerReviewsSection';
import { SanctuaryReelsCollageSection } from '../components/sections/SanctuaryReelsCollageSection';
import { useSEO } from '../hooks/useSEO';
import { useSatisfactionStats, useSubmitFeedback } from '../hooks/useAaramamApi';
import { StatMetricSkeleton } from '../components/common/LoadingAndErrorStates';

const guestFeedbackSchema = z.object({
  name: z.string().min(2, 'Please enter your name (at least 2 characters)'),
  phone_number: z.string().optional(),
  email: z.string().email('Please enter a valid email').optional().or(z.literal('')),
  treatment_taken: z.string().min(2, 'Please enter the treatment or package received'),
  rating: z.number().min(1, 'Please select a rating from 1 to 5 stars').max(5),
  feedback: z.string().min(10, 'Your feedback must be at least 10 characters long'),
});

type GuestFeedbackFormValues = z.infer<typeof guestFeedbackSchema>;

export const FeedbackPage: React.FC = () => {
  useSEO({
    title: 'Guest Insights & Healing Reflections • Aaramam Sanctuary',
    description:
      'Read authentic reflections and 5.0-star reviews from mothers and families restored by traditional Kerala Ayurvedic care at Aaramam Feroke.',
    image: '/feed-back-banner.jpeg',
    url: 'https://aaramamcare.com/feedback',
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRating, setSelectedRating] = useState(5);

  const { data: statsData, isLoading: isStatsLoading } = useSatisfactionStats();
  const {
    mutate: submitFeedback,
    isPending: isSubmitting,
    isSuccess: isSubmitSuccess,
    reset: resetMutation,
  } = useSubmitFeedback();

  const {
    register,
    handleSubmit,
    setValue,
    reset: resetForm,
    formState: { errors },
  } = useForm<GuestFeedbackFormValues>({
    resolver: zodResolver(guestFeedbackSchema),
    defaultValues: {
      name: '',
      phone_number: '',
      email: '',
      treatment_taken: 'Ayurvedic Postnatal Care',
      rating: 5,
      feedback: '',
    },
  });

  const defaultMetrics = [
    {
      title: 'Overall Guest Satisfaction',
      value: '5.0',
      subtext: 'Based on 750+ sanctuary stays',
      stars: 5,
    },
    {
      title: 'Doctor Attentiveness',
      value: '99.4%',
      subtext: 'Round-the-clock medical care',
      stars: 5,
    },
    {
      title: 'Therapeutic Results',
      value: '98.8%',
      subtext: 'Postpartum recovery & pain relief',
      stars: 5,
    },
    {
      title: 'Sanctuary Cleanliness & Ambiance',
      value: '100%',
      subtext: 'Hygiene & warm living quarters',
      stars: 5,
    },
  ];

  const metrics = React.useMemo(() => {
    if (statsData && statsData.length > 0) {
      return statsData;
    }
    return defaultMetrics;
  }, [statsData]);

  const handleRatingClick = (rate: number) => {
    setSelectedRating(rate);
    setValue('rating', rate);
  };

  const onSubmitReview = (data: GuestFeedbackFormValues) => {
    submitFeedback({
      name: data.name,
      phone_number: data.phone_number,
      email: data.email || undefined,
      treatment_taken: data.treatment_taken,
      rating: data.rating,
      feedback: data.feedback,
    });
  };

  const closeModal = () => {
    setIsModalOpen(false);
    resetForm();
    resetMutation();
  };

  return (
    <div className="w-full max-w-full min-w-0 flex flex-col bg-[#e4eae2]">
      {/* Reusable Page Hero with Dark Sanctuary Theme, Matching Background & Scalloped Wave */}
      <PageHero
        title="Cherished Words from"
        highlightTitle="Our Guests"
        description="Explore authentic reflections from mothers, holistic wellness travelers, and families whose vitality, strength, and inner peace were restored through classical Ayurveda at Aaramam."
        breadcrumbs={[{ label: 'Insights' }]}
        highlights={[
          '750+ Verified Mothers & Guests',
          'Postnatal Recovery Stories',
          'Doctor Attentiveness',
          'Feroke & Worldwide',
        ]}
        bgImage="/feed-back-banner.jpeg"
      />

      {/* Sanctuary Rating Metrics Banner */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto w-full">
        {/* Metric Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {isStatsLoading
            ? [1, 2, 3, 4].map((n) => <StatMetricSkeleton key={n} />)
            : metrics.map((item, idx) => {
                const numericVal = parseFloat(item.value.replace(/[^0-9.]/g, '')) || 5;
                const isPercentage = item.value.includes('%');
                const suffix = isPercentage ? '%' : item.value.includes('/') ? ' / 5.0' : '';

                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="bg-white/90 backdrop-blur-md p-6 rounded-[28px] border border-[#1b3420]/10 shadow-[0_10px_30px_rgba(20,40,24,0.06)] text-center space-y-2"
                  >
                    <div className="flex items-center justify-center space-x-1 text-[#d4a034]">
                      {[...Array(item.stars || 5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#d4a034] text-[#d4a034]" />
                      ))}
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-heading font-black text-[#112314]">
                      <CountUp
                        end={numericVal}
                        decimals={numericVal % 1 !== 0 ? 1 : 0}
                        suffix={suffix}
                        duration={2.0}
                      />
                    </h3>
                    <h4 className="text-xs font-heading font-bold text-[#1b3420] uppercase tracking-wider">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#526d55]">{item.subtext}</p>
                  </motion.div>
                );
              })}
        </div>

        {/* Share Feedback Trigger Button */}
        <div className="mt-10 flex justify-center">
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center space-x-2.5 px-6 py-3.5 rounded-full bg-[#112314] hover:bg-[#1a381d] text-[#fae788] border border-[#d4a034]/40 font-heading font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-xl transition-all cursor-pointer"
          >
            <MessageSquarePlus className="w-4 h-4 text-[#d4a034]" />
            <span>Share Your Sanctuary Reflection</span>
          </button>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <CustomerReviewsSection showFeedbackButton={false} />

      {/* Instagram Image & Video Reel Collage Section */}
      <SanctuaryReelsCollageSection />

      {/* Review Submission Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg bg-white rounded-[32px] p-6 sm:p-8 shadow-2xl z-10 border border-[#1b3420]/15"
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-700 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <h3 className="text-xl font-heading font-black text-[#112314] mb-1">
                Share Your Sanctuary Reflection
              </h3>
              <p className="text-xs text-[#48604a] mb-5">
                Your experience helps new mothers and families discover authentic Ayurvedic healing.
              </p>

              {isSubmitSuccess ? (
                <div className="p-6 rounded-2xl bg-[#edf5ee] border border-[#1b3420]/20 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-[#25D366] mx-auto" />
                  <h4 className="font-heading font-bold text-base text-[#112314]">
                    Thank You for Your Sacred Feedback!
                  </h4>
                  <p className="text-xs text-[#354f38]">
                    Your review has been submitted to the Aaramam sanctuary team. It will appear after quick verification.
                  </p>
                  <button
                    onClick={closeModal}
                    className="mt-2 px-5 py-2.5 rounded-full bg-[#112314] text-[#fae788] text-xs font-bold font-heading cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmitReview)} className="space-y-4">
                  {/* Rating Stars */}
                  <div>
                    <label className="block text-xs font-bold text-[#112314] mb-1.5">
                      Your Rating *
                    </label>
                    <div className="flex items-center space-x-1.5">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => handleRatingClick(star)}
                          className="p-1 cursor-pointer transition-transform hover:scale-110"
                        >
                          <Star
                            className={`w-6 h-6 ${
                              star <= selectedRating
                                ? 'fill-[#d4a034] text-[#d4a034]'
                                : 'text-gray-300'
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold text-[#112314] mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Ananya Menon"
                      {...register('name')}
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-gray-200 focus:outline-none focus:ring-1 focus:ring-[#112314]"
                    />
                    {errors.name && (
                      <p className="text-[11px] text-rose-600 mt-0.5">{errors.name.message}</p>
                    )}
                  </div>

                  {/* Treatment */}
                  <div>
                    <label className="block text-xs font-bold text-[#112314] mb-1">
                      Treatment / Program Received *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 28-Day Ayurvedic Postnatal Care"
                      {...register('treatment_taken')}
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-gray-200 focus:outline-none focus:ring-1 focus:ring-[#112314]"
                    />
                    {errors.treatment_taken && (
                      <p className="text-[11px] text-rose-600 mt-0.5">
                        {errors.treatment_taken.message}
                      </p>
                    )}
                  </div>

                  {/* Phone (optional) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-[#112314] mb-1">
                        Phone (Optional)
                      </label>
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        {...register('phone_number')}
                        className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-gray-200 focus:outline-none focus:ring-1 focus:ring-[#112314]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#112314] mb-1">
                        Email (Optional)
                      </label>
                      <input
                        type="email"
                        placeholder="ananya@example.com"
                        {...register('email')}
                        className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-gray-200 focus:outline-none focus:ring-1 focus:ring-[#112314]"
                      />
                    </div>
                  </div>

                  {/* Feedback text */}
                  <div>
                    <label className="block text-xs font-bold text-[#112314] mb-1">
                      Your Reflection *
                    </label>
                    <textarea
                      rows={3}
                      placeholder="How did the treatments, doctors, and sanctuary environment restore your wellness?"
                      {...register('feedback')}
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-gray-200 focus:outline-none focus:ring-1 focus:ring-[#112314]"
                    />
                    {errors.feedback && (
                      <p className="text-[11px] text-rose-600 mt-0.5">{errors.feedback.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 rounded-2xl bg-[#112314] hover:bg-[#1a381d] text-[#fae788] text-xs font-bold font-heading uppercase tracking-wider flex items-center justify-center space-x-2 transition-all cursor-pointer disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-[#fae788]" />
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <span>Submit Reflection</span>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
