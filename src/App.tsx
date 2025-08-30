import React from 'react';
import { CheckCircle, Download, Mail, Phone, Calendar, FileText, User, Clock, X, Printer } from 'lucide-react';

function App() {
  const [showConfirmation, setShowConfirmation] = React.useState(false);
  const [showSubmission, setShowSubmission] = React.useState(false);

  const handleDownloadConfirmation = () => {
    setShowConfirmation(true);
  };

  const handlePrintConfirmation = () => {
    window.print();
  };

  const handleViewSubmission = () => {
    setShowSubmission(true);
  };

  const handlePrintSubmission = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">E</span>
              </div>
              <span className="text-2xl font-bold text-gray-900">Elsevier</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Editorial Manager</span>
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-gray-600" />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Success Banner */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
          <div className="flex items-center space-x-3">
            <CheckCircle className="w-8 h-8 text-green-600" />
            <div>
              <h1 className="text-2xl font-bold text-green-800">Manuscript Accepted for Review</h1>
              <p className="text-green-700 mt-1">Your submission has successfully passed the initial editorial desk review</p>
            </div>
          </div>
        </div>

        {/* Manuscript Details */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-8">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Manuscript Information</h2>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Manuscript ID</label>
                <p className="text-lg font-mono text-blue-600">ENGJ-D-24-02847</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Journal</label>
                <p className="text-lg text-gray-900">Results in Engineering</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Submission Date</label>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4 text-gray-500" />
                  <p className="text-lg text-gray-900">February 20, 2024</p>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Decision Date</label>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-gray-500" />
                  <p className="text-lg text-gray-900">February 23, 2024</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
              <p className="text-lg text-gray-900 leading-relaxed">
                "Process optimization of double-pulsed GMAW using the Taguchi method for enhanced tensile strength"
              </p>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Submitting & Corresponding Author</label>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-lg font-semibold text-gray-900">Ahmed Faizul Haque Dhrubo*</p>
                <p className="text-gray-700">Department of Electrical and Computer Engineering</p>
                <p className="text-gray-700">North South University</p>
                <p className="text-gray-700">Dhaka, Bangladesh</p>
                <div className="flex items-center space-x-2 mt-2">
                  <Mail className="w-4 h-4 text-gray-500" />
                  <span className="text-blue-600">ahmed.dhrubo@northsouth.edu</span>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-3">All Authors</label>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="font-medium text-gray-900">Ahmed Faizul Haque Dhrubo*</p>
                  <p className="text-sm text-gray-600">Department of Electrical and Computer Engineering</p>
                  <p className="text-sm text-gray-600">North South University, Dhaka, Bangladesh</p>
                  <p className="text-sm text-blue-600">ahmed.dhrubo@northsouth.edu</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="font-medium text-gray-900">Hasan Yıldız</p>
                  <p className="text-sm text-gray-600">Shantou University</p>
                  <p className="text-sm text-gray-600">China</p>
                  <p className="text-sm text-blue-600">hasan.yildiz@stu.edu.cn</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="font-medium text-gray-900">Aydın Ülker</p>
                  <p className="text-sm text-gray-600">Sun Yat-sen University</p>
                  <p className="text-sm text-gray-600">China</p>
                  <p className="text-sm text-blue-600">aydin.ulker@mail.sysu.edu.cn</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="font-medium text-gray-900">Devrim Erbaytan</p>
                  <p className="text-sm text-gray-600">Peking University</p>
                  <p className="text-sm text-gray-600">China</p>
                  <p className="text-sm text-blue-600">devrim.erbaytan@pku.edu.cn</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="font-medium text-gray-900">Sami Sayer</p>
                  <p className="text-sm text-gray-600">Tsinghua University</p>
                  <p className="text-sm text-gray-600">China</p>
                  <p className="text-sm text-blue-600">sami.sayer@tsinghua.edu.cn</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="font-medium text-gray-900">Md. Khurshid Jahan</p>
                  <p className="text-sm text-gray-600">Department of Electrical and Computer Engineering</p>
                  <p className="text-sm text-gray-600">North South University, Dhaka, Bangladesh</p>
                  <p className="text-sm text-blue-600">khurshid.jahan@northsouth.edu</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Status Timeline */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-8">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Submission Timeline</h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">Manuscript Accepted for Publication</p>
                  <p className="text-sm text-gray-600">August 30, 2025 - 3:45 PM BST</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">Peer Review Complete</p>
                  <p className="text-sm text-gray-600">August 15, 2025 - 10:30 AM BST</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">Under Peer Review</p>
                  <p className="text-sm text-gray-600">March 5, 2025 - 9:20 AM BST</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">Initial Quality Check Passed</p>
                  <p className="text-sm text-gray-600">February 25, 2025 - 11:45 AM BST</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">Manuscript Submitted</p>
                  <p className="text-sm text-gray-600">February 20, 2025 - 6:30 PM BST</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-green-50 rounded-lg border border-green-200 mb-8">
          <div className="p-6">
            <h2 className="text-xl font-semibold text-green-900 mb-4">Publication Process</h2>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                <p className="text-green-800">Your manuscript will proceed to copy editing and typesetting for publication.</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                <p className="text-green-800">You will receive proofs for final review before publication.</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                <p className="text-green-800">Your article will be published online and assigned a DOI.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-8">
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Available Actions</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <button 
                onClick={handleDownloadConfirmation}
                className="flex items-center justify-center space-x-2 bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                <Download className="w-4 h-4" />
                <span>Download Confirmation</span>
              </button>
              <button className="flex items-center justify-center space-x-2 bg-gray-600 text-white px-4 py-3 rounded-lg hover:bg-gray-700 transition-colors duration-200">
                <FileText className="w-4 h-4" />
                <span>View Submission</span>
              </button>
              <button 
                onClick={handleViewSubmission}
                className="flex items-center justify-center space-x-2 bg-gray-600 text-white px-4 py-3 rounded-lg hover:bg-gray-700 transition-colors duration-200"
              >
                <FileText className="w-4 h-4" />
                <span>View Submission</span>
              </button>
              <button className="flex items-center justify-center space-x-2 bg-orange-600 text-white px-4 py-3 rounded-lg hover:bg-orange-700 transition-colors duration-200">
                <Mail className="w-4 h-4" />
                <span>Contact Editor</span>
              </button>
            </div>
          </div>
        </div>

        {/* Editorial Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Editorial Office</h3>
            </div>
            <div className="p-6">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-700">resultseng@elsevier.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-700">+1 (212) 633-3950</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  For technical issues with the Editorial Manager system, please contact technical support.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Important Information</h3>
            </div>
            <div className="p-6">
              <div className="space-y-3 text-sm text-gray-700">
                <p>• Please save this confirmation for your records</p>
                <p className="text-sm text-gray-600">• Your manuscript is now in production</p>
                <p className="text-sm text-gray-600">• Check your email for proof corrections</p>
                <p className="text-sm text-gray-600">• Expected publication: Within 4-6 weeks</p>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Status: Accepted for Publication</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            © 2024 Elsevier B.V. All rights reserved. | 
            <a href="#" className="text-blue-600 hover:text-blue-700 ml-1">Privacy Policy</a> | 
            <a href="#" className="text-blue-600 hover:text-blue-700 ml-1">Terms of Use</a>
          </p>
        </div>
      </main>

      {/* Confirmation Modal */}
      {showConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900">Publication Acceptance Confirmation</h2>
              <div className="flex items-center space-x-2">
                <button
                  onClick={handlePrintConfirmation}
                  className="flex items-center space-x-2 bg-gray-100 text-gray-700 px-3 py-2 rounded-lg hover:bg-gray-200 transition-colors duration-200"
                >
                  <Printer className="w-4 h-4" />
                  <span>Print</span>
                </button>
                <button
                  onClick={() => setShowConfirmation(false)}
                  className="text-gray-500 hover:text-gray-700 p-2"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Confirmation Letter Content */}
            <div className="p-8 space-y-6">
              {/* Elsevier Header */}
              <div className="text-center border-b border-gray-200 pb-6">
                <div className="flex items-center justify-center space-x-3 mb-2">
                  <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center">
                    <span className="text-white font-bold text-lg">E</span>
                  </div>
                  <span className="text-3xl font-bold text-gray-900">Elsevier</span>
                </div>
                <p className="text-gray-600">Computer Communications Editorial Office</p>
                <p className="text-sm text-gray-500">Date: August 30, 2025</p>
              </div>

              {/* Letter Content */}
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-gray-900">Dear Dr. Ahmed Faizul Haque Dhrubo,</p>
                </div>

                <div className="bg-green-50 border-l-4 border-green-500 p-4">
                  <p className="text-green-800 font-semibold">
                    We are delighted to inform you that your manuscript has been accepted for publication in Results in Engineering.
                  </p>
                </div>

                <div className="space-y-3">
                  <p><strong>Manuscript ID:</strong> ENGJ-D-24-02847</p>
                  <p><strong>Title:</strong> "Process optimization of double-pulsed GMAW using the Taguchi method for enhanced tensile strength"</p>
                  <p><strong>Journal:</strong> Results in Engineering</p>
                  <p><strong>Submission Date:</strong> February 20, 2025</p>
                  <p><strong>Acceptance Date:</strong> August 30, 2025</p>
                </div>

                <div className="space-y-2">
                  <p><strong>Authors:</strong></p>
                  <div className="ml-4 space-y-1 text-sm">
                    <p>1. Ahmed Faizul Haque Dhrubo* (Department of Electrical and Computer Engineering, North South University, Dhaka, Bangladesh)</p>
                    <p>2. Hasan Yıldız (Shantou University, China)</p>
                    <p>3. Aydın Ülker (Sun Yat-sen University, China)</p>
                    <p>4. Devrim Erbaytan (Peking University, China)</p>
                    <p>5. Sami Sayer (Tsinghua University, China)</p>
                    <p>6. Md. Khurshid Jahan (Department of Electrical and Computer Engineering, North South University, Dhaka, Bangladesh)</p>
                    <p className="text-xs text-gray-600 mt-2">*Corresponding Author</p>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-blue-800">
                    Your manuscript has successfully completed the peer review process and has been accepted for publication. 
                    The reviewers and editorial board were impressed with your research on GMAW process optimization using the Taguchi method, 
                    which represents a significant contribution to manufacturing engineering.
                  </p>
                </div>

                <div className="space-y-2">
                  <p><strong>Next Steps:</strong></p>
                  <ul className="ml-4 space-y-1 text-sm list-disc">
                    <li>Your manuscript will proceed to copy editing and typesetting</li>
                    <li>You will receive proofs for final review within 2-3 weeks</li>
                    <li>The article will be published online upon proof approval</li>
                    <li>A DOI will be assigned for citation purposes</li>
                  </ul>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <p className="text-sm text-gray-600">
                    If you have any questions regarding the publication process, please contact the editorial office 
                    at <span className="text-blue-600">resultseng@elsevier.com</span> and reference your manuscript ID.
                  </p>
                </div>

                <div className="text-center pt-4">
                  <p className="text-sm text-gray-600">
                    Thank you for choosing Results in Engineering for your research publication.
                  </p>
                  <p className="text-sm font-semibold text-gray-800 mt-2">
                    Editorial Office<br />
                    Results in Engineering<br />
                    Elsevier B.V.
                  </p>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex justify-end space-x-3 p-6 border-t border-gray-200 bg-gray-50">
              <button
                onClick={() => setShowConfirmation(false)}
                className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                Close
              </button>
              <button
                onClick={handlePrintConfirmation}
                className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                <Download className="w-4 h-4" />
                <span>Download PDF</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* View Submission Modal */}
      {showSubmission && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900">Manuscript Submission Details</h2>
              <div className="flex items-center space-x-2">
                <button
                  onClick={handlePrintSubmission}
                  className="flex items-center space-x-2 bg-gray-100 text-gray-700 px-3 py-2 rounded-lg hover:bg-gray-200 transition-colors duration-200"
                >
                  <Printer className="w-4 h-4" />
                  <span>Print</span>
                </button>
                <button
                  onClick={() => setShowSubmission(false)}
                  className="text-gray-500 hover:text-gray-700 p-2"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Submission Details Content */}
            <div className="p-8 space-y-6">
              {/* Elsevier Header */}
              <div className="text-center border-b border-gray-200 pb-6">
                <div className="flex items-center justify-center space-x-3 mb-2">
                  <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center">
                    <span className="text-white font-bold text-lg">E</span>
                  </div>
                  <span className="text-3xl font-bold text-gray-900">Elsevier</span>
                </div>
                <p className="text-gray-600">Results in Engineering Editorial Office</p>
                <p className="text-sm text-gray-500">Submission Details Report</p>
              </div>

              {/* Manuscript Information */}
              <div className="space-y-4">
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">Manuscript Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p><strong>Manuscript ID:</strong> ENGJ-D-24-02847</p>
                      <p><strong>Journal:</strong> Results in Engineering</p>
                      <p><strong>Submission Date:</strong> February 20, 2025</p>
                      <p><strong>Status:</strong> Accepted for Publication</p>
                    </div>
                    <div>
                      <p><strong>Article Type:</strong> Research Article</p>
                      <p><strong>Subject Area:</strong> Manufacturing Engineering</p>
                      <p><strong>Keywords:</strong> GMAW, Taguchi Method, Process Optimization, Tensile Strength</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Title</h3>
                  <p className="text-gray-800 text-lg leading-relaxed bg-gray-50 p-4 rounded-lg">
                    "Process optimization of double-pulsed GMAW using the Taguchi method for enhanced tensile strength"
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Author Information</h3>
                  
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                      <h4 className="font-semibold text-blue-900 mb-2">Corresponding & Submitting Author</h4>
                      <p className="font-medium text-gray-900">Ahmed Faizul Haque Dhrubo*</p>
                      <p className="text-gray-700">Department of Electrical and Computer Engineering</p>
                      <p className="text-gray-700">North South University</p>
                      <p className="text-gray-700">Dhaka, Bangladesh</p>
                      <div className="flex items-center space-x-2 mt-2">
                        <Mail className="w-4 h-4 text-gray-500" />
                        <span className="text-blue-600">ahmed.dhrubo@northsouth.edu</span>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Co-Authors</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div>
                          <p className="font-medium text-gray-900">Hasan Yıldız</p>
                          <p className="text-sm text-gray-700">Shantou University, China</p>
                          <p className="text-sm text-blue-600">hasan.yildiz@stu.edu.cn</p>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">Aydın Ülker</p>
                          <p className="text-sm text-gray-700">Sun Yat-sen University, China</p>
                          <p className="text-sm text-blue-600">aydin.ulker@mail.sysu.edu.cn</p>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">Devrim Erbaytan</p>
                          <p className="text-sm text-gray-700">Peking University, China</p>
                          <p className="text-sm text-blue-600">devrim.erbaytan@pku.edu.cn</p>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">Sami Sayer</p>
                          <p className="text-sm text-gray-700">Tsinghua University, China</p>
                          <p className="text-sm text-blue-600">sami.sayer@tsinghua.edu.cn</p>
                        </div>
                      </div>
                      <div className="mt-3 pt-3 border-t border-gray-200">
                        <p className="font-medium text-gray-900">Md. Khurshid Jahan</p>
                      <p className="text-gray-700">Department of Electrical and Computer Engineering</p>
                      <p className="text-gray-700">North South University</p>
                      <p className="text-gray-700">Dhaka, Bangladesh</p>
                      <div className="flex items-center space-x-2 mt-2">
                        <Mail className="w-4 h-4 text-gray-500" />
                        <span className="text-blue-600">khurshid.jahan@northsouth.edu</span>
                      </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Abstract</h3>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-800 leading-relaxed">
                      This study presents a comprehensive optimization approach for double-pulsed Gas Metal Arc Welding (GMAW) 
                      using the Taguchi method to enhance tensile strength of welded joints. The research investigates the effects 
                      of key welding parameters including pulse frequency, background current, peak current, and travel speed on 
                      the mechanical properties of the weld. Through systematic experimentation using L16 orthogonal array design, 
                      optimal parameter combinations were identified that significantly improve tensile strength while maintaining 
                      weld quality. The results demonstrate that the Taguchi method provides an efficient approach for process 
                      optimization in advanced welding applications, offering substantial improvements in joint strength and 
                      manufacturing efficiency for industrial applications.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Submission Timeline</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-4">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <div>
                        <p className="font-medium text-gray-900">Manuscript Accepted for Publication</p>
                        <p className="text-sm text-gray-600">August 30, 2025 - 3:45 PM BST</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <div>
                        <p className="font-medium text-gray-900">Peer Review Complete - Recommended for Acceptance</p>
                        <p className="text-sm text-gray-600">August 15, 2025 - 10:30 AM BST</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <div>
                        <p className="font-medium text-gray-900">Under Peer Review</p>
                        <p className="text-sm text-gray-600">March 5, 2025 - 9:20 AM BST</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <div>
                        <p className="font-medium text-gray-900">Initial Quality Check Passed</p>
                        <p className="text-sm text-gray-600">February 25, 2025 - 11:45 AM BST</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <div>
                        <p className="font-medium text-gray-900">Manuscript Submitted by Ahmed Faizul Haque Dhrubo</p>
                        <p className="text-sm text-gray-600">February 20, 2025 - 6:30 PM BST</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-green-800 mb-2">Current Status</h3>
                  <p className="text-green-700">
                    Your manuscript has been accepted for publication and is now in the production phase. 
                    The copy editing and typesetting process will begin shortly, and you will receive 
                    proofs for final review before online publication.
                  </p>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <p className="text-sm text-gray-600 text-center">
                    This submission report was generated on August 30, 2025<br />
                    For questions, contact: <span className="text-blue-600">resultseng@elsevier.com</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex justify-end space-x-3 p-6 border-t border-gray-200 bg-gray-50">
              <button
                onClick={() => setShowSubmission(false)}
                className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                Close
              </button>
              <button
                onClick={handlePrintSubmission}
                className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                <Download className="w-4 h-4" />
                <span>Download Report</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;