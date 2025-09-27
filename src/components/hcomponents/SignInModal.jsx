import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import toast from 'react-hot-toast';

const SocialButton = ({ icon, text, onClick }) => (
  <button onClick={onClick} className="w-full flex items-center justify-center py-3 px-4 border border-gray-300 rounded-full text-lg hover:bg-gray-50 transition-transform active:scale-[0.98] mb-3">
    {icon}
    <span className="ml-3 font-medium text-gray-700 text-base">{text}</span>
  </button>
);

const SignInModal = ({ isOpen, onClose }) => {
  const handleAuth = (provider) => {
    const promise = new Promise((resolve) => setTimeout(() => resolve(`Signed in with ${provider}`), 1500));

    toast.promise(promise, {
      loading: `Connecting with ${provider}...`,
      success: <b>Success! Redirecting...</b>,
      error: <b>Could not sign in.</b>,
    });
  };

  const googleIcon = <svg className="w-6 h-6" viewBox="0 0 48 48"><path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"></path><path fill="#FF3D00" d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z"></path><path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-6.627 0-12-5.373-12-12h-8c0 11.045 8.955 20 20 20z"></path><path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571l6.19 5.238C42.012 35.853 44 30.278 44 24c0-1.341-.138-2.65-.389-3.917z"></path></svg>;
  const facebookIcon = <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#1877F2"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3l-.5 3h-2.5v6.8c4.56-.93 8-4.96 8-9.8z"></path></svg>;
  const appleIcon = <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M19.3 12.18c.1-1.63-1.3-3.26-3.1-3.26-1.02 0-1.92.51-2.49 1.32-.48-.9-1.5-1.52-2.7-1.52-1.3 0-2.58.91-3.28 2.23-1.41.1-2.88.92-3.68 2.33-.89 1.52-.79 3.25-.2 4.68.69 1.62 1.89 2.99 3.39 2.99.92 0 1.71-.51 2.28-1.22.68.81 1.79 1.42 2.99 1.42 1.1 0 2.1-.51 2.7-1.32.7.71 1.61 1.12 2.6 1.12 1.6 0 2.89-1.62 3.49-3.25.3-.81.4-1.63.1-2.43zm-6.2-4.15c.61-.91 1.52-1.42 2.6-1.42 1.41 0 2.5 1.21 2.5 2.73 0 1.02-.61 1.92-1.41 2.33-.81-.92-2.11-1.63-3.69-1.63zM8.1 8.91c0-1.52 1.1-2.73 2.5-2.73.92 0 1.71.51 2.29 1.32-.2.01-.4.01-.6.01-1.68 0-3.12.8-3.99 2-.4-.5-.6-1.01-.2-1.6z"></path></svg>;

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
          <div className="fixed inset-0 bg-black bg-opacity-60" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
              <Dialog.Panel className="w-full max-w-sm transform overflow-hidden rounded-xl bg-white p-7 text-left align-middle shadow-xl transition-all">
                <Dialog.Title as="h3" className="text-2xl font-bold text-center mb-6 text-gray-900">
                  Sign in or create an account
                </Dialog.Title>

                <div className="space-y-1">
                  <SocialButton onClick={() => handleAuth('Google')} icon={googleIcon} text="Sign in with Google" />
                  <SocialButton onClick={() => handleAuth('Facebook')} icon={facebookIcon} text="Sign in with Facebook" />
                  <SocialButton onClick={() => handleAuth('Apple')} icon={appleIcon} text="Sign in with Apple" />
                </div>

                <div className="flex items-center my-5"><hr className="flex-grow border-t border-gray-200" /><span className="px-3 text-gray-500 text-sm font-medium">Or</span><hr className="flex-grow border-t border-gray-200" /></div>
                
                <form onSubmit={(e) => { e.preventDefault(); handleAuth('Email'); }}>
                  <input type="email" placeholder="Email" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" />
                  <button type="submit" className="w-full bg-gray-900 text-white font-bold py-3 rounded-full mt-4 hover:bg-gray-800 transition-transform active:scale-[0.98]">Continue</button>
                </form>

                <p className="text-xs text-gray-500 text-center mt-5">By signing in or creating an account, you agree to our <a href="#" className="underline">Privacy Notice</a> and <a href="#" className="underline">Terms and Conditions</a>.</p>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default SignInModal;