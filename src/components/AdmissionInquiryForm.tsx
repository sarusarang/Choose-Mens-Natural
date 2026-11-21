import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Send, CheckCircle2, AlertCircle, Loader2, MessageSquare, ExternalLink } from 'lucide-react';
import { useSubmitAdmissionInquiry } from '../hooks/useAaramamApi';
import type { AdmissionProgramType, BystanderAccommodationType } from '../types/api';

export const admissionInquirySchema = z.object({
  name: z
    .string()
    .min(2, 'Please enter your full name (minimum 2 characters)')
    .max(100, 'Name is too long'),
  phone_number: z
    .string()
    .min(10, 'Please enter a valid phone number (at least 10 digits)')
    .regex(/^[0-9+\-\s()]+$/, 'Please enter a valid phone format with country code'),
  email: z
    .string()
    .email('Please enter a valid email address')
    .optional()
    .or(z.literal('')),
  program: z.enum([
    'postnatal',
    'shirodhara',
    'panchakarma',
    'kizhi',
    'doctor_consultation',
    'general',
  ] as const),
  bystander_accommodation: z.enum([
    '1_bystander',
    '2_bystanders',
    'no_bystander',
    'day_care',
  ] as const),
  requirements_or_due_date: z.string().optional(),
});

export type AdmissionInquiryFormData = z.infer<typeof admissionInquirySchema>;

interface AdmissionInquiryFormProps {
  initialProgram?: AdmissionProgramType;
  className?: string;
  onSuccessRedirect?: (whatsappUrl: string) => void;
}

export const AdmissionInquiryForm: React.FC<AdmissionInquiryFormProps> = ({
  initialProgram = 'postnatal',
  className = '',
  onSuccessRedirect,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AdmissionInquiryFormData>({
    resolver: zodResolver(admissionInquirySchema),
    defaultValues: {
      name: '',
      phone_number: '',
      email: '',
      program: initialProgram,
      bystander_accommodation: '1_bystander',
      requirements_or_due_date: '',
    },
  });

  const {
    mutate: submitInquiry,
    isPending,
    isSuccess,
    data: successData,
    error,
    reset: resetMutation,
  } = useSubmitAdmissionInquiry();

  const onSubmit = (data: AdmissionInquiryFormData) => {
    submitInquiry(
      {
        name: data.name,
        phone_number: data.phone_number,
        email: data.email?.trim() || undefined,
        program: data.program as AdmissionProgramType,
        bystander_accommodation: data.bystander_accommodation as BystanderAccommodationType,
        requirements_or_due_date: data.requirements_or_due_date || '',
      },
      {
        onSuccess: (res) => {
          if (onSuccessRedirect && res.whatsapp_url) {
            onSuccessRedirect(res.whatsapp_url);
          }
        },
      }
    );
  };

  const handleStartNew = () => {
    reset();
    resetMutation();
  };

  return (
    <div
      className={`w-full bg-white/95 backdrop-blur-md rounded-[32px] p-6 sm:p-8 md:p-10 border border-[#1b3420]/15 shadow-[0_20px_50px_rgba(20,40,24,0.08)] ${className}`}
    >
      <div className="mb-6 space-y-1.5">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#1b3420]/10 text-[#1b3420] text-xs font-bold uppercase tracking-wider">
          <MessageSquare className="w-3.5 h-3.5 text-[#b18137]" />
          <span>Doctor Consultation &amp; Admissions Desk</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-black text-[#112314] tracking-tight">
          Inquire or Book Your Mother-Baby Stay
        </h3>
        <p className="text-xs sm:text-sm text-[#3d503f]">
          Submit your requirements to receive immediate confirmation and connect with our resident BAMS physicians directly via WhatsApp.
        </p>
      </div>

      {isSuccess && successData ? (
        <div className="space-y-5 py-4">
          <div className="p-5 rounded-2xl bg-[#112314] text-white border border-[#d4a034]/40 space-y-3">
            <div className="flex items-center space-x-2 text-[#fae788]">
              <CheckCircle2 className="w-6 h-6 text-[#fae788] shrink-0" />
              <h4 className="font-heading font-bold text-base">Inquiry Successfully Registered!</h4>
            </div>
            <p className="text-xs text-white/85 leading-relaxed">
              Thank you, <strong className="text-[#fae788]">{successData.data.name}</strong>. Your inquiry for{' '}
              <strong className="text-[#fae788]">{successData.data.program_display || successData.data.program}</strong>{' '}
              has been recorded in the Aaramam Feroke admissions register.
            </p>
            {successData.data.email && (
              <p className="text-xs text-[#fae788]/95 bg-white/10 p-2.5 rounded-xl border border-white/15 mt-2">
                ✓ A confirmation receipt and summary have been sent to <strong>{successData.data.email}</strong>.
              </p>
            )}
            {successData.whatsapp_url && (
              <a
                href={successData.whatsapp_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-bold text-sm hover:opacity-95 transition-all shadow-md mt-2"
              >
                <span>Continue on Doctor WhatsApp Desk</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>

          <button
            type="button"
            onClick={handleStartNew}
            className="w-full py-2.5 text-xs font-bold text-[#1b3420] hover:text-[#b18137] underline text-center cursor-pointer transition-colors"
          >
            Submit Another Inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-5">
          {error && (
            <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-start space-x-2.5">
              <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold">Unable to submit inquiry at this moment.</p>
                <p className="text-[11px] text-rose-700 mt-0.5">
                  Please verify your connection or click the floating WhatsApp button to chat directly with our doctor desk.
                </p>
              </div>
            </div>
          )}

          {/* Full Name */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-[#112314] tracking-wide">
              Your Full Name <span className="text-rose-600">*</span>
            </label>
            <input
              type="text"
              placeholder="e.g. Gopika Suresh"
              {...register('name')}
              className={`w-full px-4 py-3 rounded-xl border text-sm font-medium transition-all bg-[#f8faf8] text-[#112314] placeholder:text-gray-400 focus:bg-white focus:outline-none focus:ring-2 ${
                errors.name
                  ? 'border-rose-400 focus:ring-rose-200'
                  : 'border-[#1b3420]/20 focus:border-[#1b3420] focus:ring-[#1b3420]/10'
              }`}
            />
            {errors.name && (
              <p className="text-[11px] text-rose-600 font-semibold">{errors.name.message}</p>
            )}
          </div>

          {/* Phone & Email Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Phone / WhatsApp Number */}
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-[#112314] tracking-wide">
                Phone / WhatsApp Number <span className="text-rose-600">*</span>
              </label>
              <input
                type="tel"
                placeholder="+91 97451 23456"
                {...register('phone_number')}
                className={`w-full px-4 py-3 rounded-xl border text-sm font-medium transition-all bg-[#f8faf8] text-[#112314] placeholder:text-gray-400 focus:bg-white focus:outline-none focus:ring-2 ${
                  errors.phone_number
                    ? 'border-rose-400 focus:ring-rose-200'
                    : 'border-[#1b3420]/20 focus:border-[#1b3420] focus:ring-[#1b3420]/10'
                }`}
              />
              {errors.phone_number && (
                <p className="text-[11px] text-rose-600 font-semibold">{errors.phone_number.message}</p>
              )}
            </div>

            {/* Email Address (Optional) */}
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-[#112314] tracking-wide">
                Email Address <span className="text-gray-400 font-normal">(Optional)</span>
              </label>
              <input
                type="email"
                placeholder="guest@example.com"
                {...register('email')}
                className={`w-full px-4 py-3 rounded-xl border text-sm font-medium transition-all bg-[#f8faf8] text-[#112314] placeholder:text-gray-400 focus:bg-white focus:outline-none focus:ring-2 ${
                  errors.email
                    ? 'border-rose-400 focus:ring-rose-200'
                    : 'border-[#1b3420]/20 focus:border-[#1b3420] focus:ring-[#1b3420]/10'
                }`}
              />
              {errors.email ? (
                <p className="text-[11px] text-rose-600 font-semibold">{errors.email.message}</p>
              ) : (
                <p className="text-[10px] text-[#4d6650]">Triggers instant email receipt &amp; confirmation</p>
              )}
            </div>
          </div>

          {/* Program & Bystander Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Treatment / Program */}
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-[#112314] tracking-wide">
                Interested Program <span className="text-rose-600">*</span>
              </label>
              <select
                {...register('program')}
                className="w-full px-4 py-3 rounded-xl border border-[#1b3420]/20 bg-[#f8faf8] text-[#112314] text-sm font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1b3420]/10"
              >
                <option value="postnatal">Ayurvedic Postnatal Care</option>
                <option value="shirodhara">Shirodhara &amp; Stress Relief</option>
                <option value="panchakarma">Panchakarma &amp; Detox</option>
                <option value="kizhi">Herbal Kizhi Therapy</option>
                <option value="doctor_consultation">Doctor Consultation</option>
                <option value="general">General Sanctuary Inquiry</option>
              </select>
            </div>

            {/* Bystander Accommodation */}
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-[#112314] tracking-wide">
                Accommodation Preference <span className="text-rose-600">*</span>
              </label>
              <select
                {...register('bystander_accommodation')}
                className="w-full px-4 py-3 rounded-xl border border-[#1b3420]/20 bg-[#f8faf8] text-[#112314] text-sm font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1b3420]/10"
              >
                <option value="1_bystander">1 Bystander Included</option>
                <option value="2_bystanders">2 Bystanders (Family Suite)</option>
                <option value="no_bystander">Mother &amp; Baby Only</option>
                <option value="day_care">Day Care Only (No Stay)</option>
              </select>
            </div>
          </div>

          {/* Notes / Due Date */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-[#112314] tracking-wide">
              Expected Delivery Date or Health Notes (Optional)
            </label>
            <textarea
              rows={3}
              placeholder="Mention expected delivery date, special health conditions, dietary considerations, or previous treatments..."
              {...register('requirements_or_due_date')}
              className="w-full px-4 py-3 rounded-xl border border-[#1b3420]/20 bg-[#f8faf8] text-[#112314] text-sm font-medium placeholder:text-gray-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1b3420]/10"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isPending}
            className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#112314] to-[#1c3821] hover:from-[#18341d] hover:to-[#24482b] text-[#fae788] border border-[#d4a034]/50 font-heading font-black text-xs sm:text-sm uppercase tracking-wider shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-60 cursor-pointer"
          >
            {isPending ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-[#fae788]" />
                <span>Recording Inquiry...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4 text-[#fae788]" />
                <span>Submit &amp; Connect on WhatsApp</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
};
