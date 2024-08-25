'use client'

import React, { useState } from 'react'
import Link from "next/link"
import MaxWidthWrapper from "./MaxWidthWrapper"
import { ArrowRight, Menu, X } from 'lucide-react'
import { Button, buttonVariants } from './ui/button'
import { cn } from '@/lib/utils'
import { useAuth } from '@/contexts/AuthContext'

function Navbar() {
    const { user, signInWithGoogle, logout } = useAuth()
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const handleAuthAction = () => {
        if (user) {
            logout()
        } else {
            signInWithGoogle()
        }
    }

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    return (
        <nav className="sticky h-16 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-sm transition-all">
            <MaxWidthWrapper>
                <div className='flex h-16 items-center justify-between'>
                    <div className='flex items-center justify-center gap-14'>
                        <Link href='/' className='flex z-40 font-bold text-lg'>
                            <span>Your App</span>
                        </Link>

                        <div className="hidden md:flex items-center justify-center gap-8 lg:gap-14">
                            <Link href='#pricing' className='font-semibold hover:underline hover:underline-offset-1'>
                                Pricing
                            </Link>
                            <Link href='#demo' className='font-semibold hover:underline hover:underline-offset-1'>
                                Demo
                            </Link>
                            <Link href='#faq' className='font-semibold hover:underline hover:underline-offset-1'>
                                FAQ
                            </Link>
                            <Link href='#about' className='font-semibold hover:underline hover:underline-offset-1'>
                                ABOUT
                            </Link>
                        </div>
                    </div>

                    <div className='md:hidden'>
                        {isMobileMenuOpen ? (
                            <X className='h-6 w-6 cursor-pointer' onClick={toggleMobileMenu} />
                        ) : (
                            <Menu className='h-6 w-6 cursor-pointer' onClick={toggleMobileMenu} />
                        )}
                    </div>

                    <div className='hidden md:flex items-center space-x-1.5'>
                        <Button onClick={handleAuthAction} className={cn(buttonVariants({ size: "sm" }), "flex items-center justify-center group px-4")}>
                            <span>{user ? 'Sign out' : 'Sign in'}</span>
                            <ArrowRight className='ml-1.5 transform h-4 w-4 transition-transform duration-300 group-hover:translate-x-1' />
                        </Button>
                    </div>
                </div>
            </MaxWidthWrapper>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-200 py-2">
                    <div className="flex flex-col items-center">
                        <Link href='#pricing' className='font-semibold py-2 hover:bg-gray-100 w-full text-center' onClick={toggleMobileMenu}>
                            Pricing
                        </Link>
                        <Link href='#demo' className='font-semibold py-2 hover:bg-gray-100 w-full text-center' onClick={toggleMobileMenu}>
                            Demo
                        </Link>
                        <Link href='#faq' className='font-semibold py-2 hover:bg-gray-100 w-full text-center' onClick={toggleMobileMenu}>
                            FAQ
                        </Link>
                        <Link href='#about' className='font-semibold py-2 hover:bg-gray-100 w-full text-center' onClick={toggleMobileMenu}>
                            ABOUT
                        </Link>
                        <Button onClick={() => { handleAuthAction(); toggleMobileMenu(); }} className={cn(buttonVariants({ size: "sm" }), "flex items-center justify-center group px-4 mt-2")}>
                            <span>{user ? 'Sign out' : 'Sign in'}</span>
                            <ArrowRight className='ml-1.5 transform h-4 w-4 transition-transform duration-300 group-hover:translate-x-1' />
                        </Button>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar