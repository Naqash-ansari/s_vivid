'use client';

import { useEffect, useState } from 'react';
import { Dialog, DialogPanel, DialogTitle, DialogBackdrop } from '@headlessui/react';

export default function Welcome() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const hasSeenModal = sessionStorage.getItem('welcome_shown');
        if (!hasSeenModal) {
            setOpen(true);
            sessionStorage.setItem('welcome_shown', 'true');
        }
    }, []);

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Dialog open={open} onClose={handleClose} className="relative z-50">
            <div className="fixed inset-0 bg-black/80" aria-hidden="true" />
            <div className="fixed inset-0 flex items-center justify-center p-4">
                <DialogPanel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <DialogTitle as="h3" className="text-lg font-semibold leading-6 text-gray-900">
                        Welcome to Sign Vivid!
                    </DialogTitle>
                    <div className="mt-2">
                        <p className="text-sm text-gray-600">
                            Thanks for visiting! Dive into our unique signage collection and discover creative ways to make your business stand out.
                        </p>
                    </div>

                    <div className="mt-4 flex justify-end gap-2">
                        <button
                            type="button"
                            onClick={handleClose}
                            className="inline-flex justify-center rounded-md border border-transparent bg-amber-600 px-4 py-2 text-sm font-medium text-white hover:bg-amber-700 focus:outline-none"
                        >
                            Let’s Get Started
                        </button>
                    </div>
                </DialogPanel>
            </div>
        </Dialog>
    );
}
