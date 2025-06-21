
import React, { useState } from 'react';
import { FileCheck, Search, Award, CheckCircle, AlertCircle } from 'lucide-react';

const VerifySection = () => {
  const [certificateId, setCertificateId] = useState('');
  const [verificationResult, setVerificationResult] = useState<{
    status: 'idle' | 'verifying' | 'valid' | 'invalid';
    data?: any;
  }>({ status: 'idle' });

  const handleVerify = async () => {
    if (!certificateId.trim()) return;
    
    setVerificationResult({ status: 'verifying' });
    
    // Simulate API call
    setTimeout(() => {
      if (certificateId.toLowerCase().includes('inlighn')) {
        setVerificationResult({
          status: 'valid',
          data: {
            studentName: 'John Doe',
            program: 'Full Stack Development',
            completionDate: '2024-03-15',
            grade: 'Distinction'
          }
        });
      } else {
        setVerificationResult({ status: 'invalid' });
      }
    }, 2000);
  };

  return (
    <section id="verify" className="py-20 bg-gradient-to-b from-background to-blue-50/10 dark:to-slate-900/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-full text-blue-700 dark:text-blue-300 text-sm font-medium mb-6">
            <FileCheck size={16} />
            Certificate Verification
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Verify Your
            <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Achievement
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Authenticate your Inlighn Tech certificate and showcase your verified skills to employers worldwide.
          </p>
        </div>

        {/* Verification Interface */}
        <div className="reveal bg-card/80 backdrop-blur-sm border border-border/50 dark:bg-card/40 dark:border-border/30 rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 glow-azure">
              <Award className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">Certificate Verification Portal</h3>
            <p className="text-muted-foreground">Enter your certificate ID to verify its authenticity</p>
          </div>

          {/* Input Form */}
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                value={certificateId}
                onChange={(e) => setCertificateId(e.target.value)}
                placeholder="Enter Certificate ID (e.g., INLIGHN-2024-001)"
                className="w-full px-4 py-3 pr-12 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-foreground placeholder:text-muted-foreground"
              />
              <button
                onClick={handleVerify}
                disabled={!certificateId.trim() || verificationResult.status === 'verifying'}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
              >
                {verificationResult.status === 'verifying' ? (
                  <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"></div>
                ) : (
                  <Search size={20} />
                )}
              </button>
            </div>
          </div>

          {/* Verification Results */}
          {verificationResult.status === 'valid' && (
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800/50 rounded-xl p-6 animate-fade-in">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="text-green-500" size={24} />
                <h4 className="text-lg font-semibold text-green-800 dark:text-green-300">Certificate Verified!</h4>
              </div>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-green-600 dark:text-green-400 font-medium">Student Name:</span>
                  <div className="text-green-800 dark:text-green-300">{verificationResult.data?.studentName}</div>
                </div>
                <div>
                  <span className="text-green-600 dark:text-green-400 font-medium">Program:</span>
                  <div className="text-green-800 dark:text-green-300">{verificationResult.data?.program}</div>
                </div>
                <div>
                  <span className="text-green-600 dark:text-green-400 font-medium">Completion Date:</span>
                  <div className="text-green-800 dark:text-green-300">{verificationResult.data?.completionDate}</div>
                </div>
                <div>
                  <span className="text-green-600 dark:text-green-400 font-medium">Grade:</span>
                  <div className="text-green-800 dark:text-green-300">{verificationResult.data?.grade}</div>
                </div>
              </div>
            </div>
          )}

          {verificationResult.status === 'invalid' && (
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/50 rounded-xl p-6 animate-fade-in">
              <div className="flex items-center gap-3 mb-2">
                <AlertCircle className="text-red-500" size={24} />
                <h4 className="text-lg font-semibold text-red-800 dark:text-red-300">Certificate Not Found</h4>
              </div>
              <p className="text-red-600 dark:text-red-400">
                The certificate ID you entered could not be verified. Please check the ID and try again.
              </p>
            </div>
          )}

          {/* Sample Certificate IDs */}
          <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200/50 dark:border-blue-800/30 rounded-xl">
            <h5 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">Sample Certificate ID for Testing:</h5>
            <code className="text-blue-600 dark:text-blue-400 text-sm bg-background px-2 py-1 rounded border border-border/50">INLIGHN-2024-001</code>
          </div>
        </div>

        {/* Additional Info */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="text-center reveal">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Award className="text-white" size={20} />
            </div>
            <h4 className="font-semibold text-foreground mb-2">Instant Verification</h4>
            <p className="text-sm text-muted-foreground">Get immediate confirmation of certificate authenticity</p>
          </div>
          
          <div className="text-center reveal">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-3">
              <CheckCircle className="text-white" size={20} />
            </div>
            <h4 className="font-semibold text-foreground mb-2">Globally Recognized</h4>
            <p className="text-sm text-muted-foreground">Certificates accepted by employers worldwide</p>
          </div>
          
          <div className="text-center reveal">
            <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-3">
              <FileCheck className="text-white" size={20} />
            </div>
            <h4 className="font-semibold text-foreground mb-2">Secure & Trusted</h4>
            <p className="text-sm text-muted-foreground">Blockchain-secured certificate validation</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VerifySection;
