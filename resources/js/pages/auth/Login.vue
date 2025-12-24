<script setup lang="ts">
import { Head, Form, Link } from '@inertiajs/vue3'
import AuthLayout from '@/layouts/AuthLayout.vue'
import { store } from '@/routes/login'
import { request } from '@/routes/password'
import { register } from '@/routes'
import Spinner from '@/components/ui/spinner/Spinner.vue'
</script>

<template>

    <Head title="Login | Nervego" />
    <AuthLayout>
        <Transition name="auth" mode="out-in">  
            <div key="login" class="page-content">
                <div class="section-full site-bg-black d-flex align-items-center" style="min-height: 100vh;">
                    <div class="container py-5">
                        <div class="section-content">
                            <div class="kv-contact-section wow fadeInDown" data-wow-delay="0.2">
                                <div class="row">
    
                                    <!-- LOGIN FORM -->
                                    <div class="col-xl-6 col-lg-12 col-md-12">
                                        <div class="kv-contact-page-form site-bg-primary h-100">
    
                                            <div class="section-head left">
                                                <div class="kv-sm-title left">Welcome back</div>
                                                <h2 class="kv-large-title site-text-white">Log in</h2>
                                            </div>
    
                                            <div class="contact-form-outer">
                                                <Form v-bind="store.form()" :reset-on-success="['password']"
                                                    v-slot="{ errors, processing }" class="cons-contact-form">
                                                    <div class="row">
    
                                                        <div class="col-lg-12">
                                                            <div class="form-group mb-4">
                                                                <input type="email" name="email"
                                                                    class="form-control text-white placeholder:text-gray-400"
                                                                    placeholder="Email" required />
                                                                <small v-if="errors.email" class="text-danger d-block mt-1">
                                                                    {{ errors.email }}
                                                                </small>
                                                            </div>
                                                        </div>
    
                                                        <div class="col-lg-12">
                                                            <div class="form-group mb-4">
                                                                <input type="password" name="password"
                                                                    class="form-control text-white placeholder:text-gray-400"
                                                                    placeholder="Password" required />
                                                                <small v-if="errors.password"
                                                                    class="text-danger d-block mt-1">
                                                                    {{ errors.password }}
                                                                </small>
                                                            </div>
                                                        </div>
    
                                                        <div class="col-lg-12 mb-4 d-flex justify-content-between">
                                                            <label class="site-text-white d-flex align-items-center gap-2">
                                                                <input type="checkbox" name="remember" />
                                                                <span>Remember me</span>
                                                            </label>
    
                                                            <Link :href="request()" class="site-text-white">
                                                                Forgot password?
                                                            </Link>
                                                        </div>
    
                                                        <div class="col-md-12">
                                                            <button type="submit"
                                                                class="site-button dark-bg w-100 d-flex align-items-center justify-content-center"
                                                                :disabled="processing">
                                                                <Spinner v-if="processing" />
                                                                <span class="ms-2">
                                                                    {{ processing ? 'Logging in…' : 'Log in' }}
                                                                </span>
                                                            </button>
                                                        </div>
    
                                                    </div>
                                                </Form>
                                                <div class="text-center mt-4 site-text-white">
                                                    Don’t have an account?
                                                    <Link :href="register()">Register</Link>
                                                </div>
                                            </div>
    
                                        </div>
                                    </div>
    
                                    <!-- LOGIN DETAILS / INFO -->
                                    <div class="col-xl-6 col-lg-12 col-md-12">
                                        <div class="kv-contact-page-detail h-100 d-flex flex-column justify-content-center">
    
                                            <div class="section-head left">
                                                <h2 class="kv-large-title site-text-white">
                                                    Build, manage and grow with Nervego
                                                </h2>
                                                <p class="p-text">
                                                    Access your dashboard, manage content, and stay connected with
                                                    the Nervego ecosystem.
                                                </p>
                                            </div>
    
                                            <div class="row align-items-stretch">
    
                                                <div class="col-md-6 col-sm-6">
                                                    <div class="kv-icon-style-left">
                                                        <div class="kv-media">
                                                            <i class="feather feather-lock"></i>
                                                        </div>
                                                        <div class="kv-content">
                                                            <h3 class="kv-title">Secure Access</h3>
                                                            <p>Your data is protected</p>
                                                        </div>
                                                    </div>
                                                </div>
    
                                                <div class="col-md-6 col-sm-6">
                                                    <div class="kv-icon-style-left">
                                                        <div class="kv-media">
                                                            <i class="feather feather-user"></i>
                                                        </div>
                                                        <div class="kv-content">
                                                            <h3 class="kv-title">Personal Dashboard</h3>
                                                            <p>Manage your account</p>
                                                        </div>
                                                    </div>
                                                </div>
    
                                                <div class="col-md-6 col-sm-6">
                                                    <div class="kv-icon-style-left">
                                                        <div class="kv-media">
                                                            <i class="feather feather-bar-chart-2"></i>
                                                        </div>
                                                        <div class="kv-content">
                                                            <h3 class="kv-title">Insights</h3>
                                                            <p>Track activity & growth</p>
                                                        </div>
                                                    </div>
                                                </div>
    
                                                <div class="col-md-6 col-sm-6">
                                                    <div class="kv-icon-style-left">
                                                        <div class="kv-media">
                                                            <i class="feather feather-settings"></i>
                                                        </div>
                                                        <div class="kv-content">
                                                            <h3 class="kv-title">Control</h3>
                                                            <p>Manage preferences</p>
                                                        </div>
                                                    </div>
                                                </div>
    
                                            </div>
                                        </div>
                                    </div>
    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Transition>
    </AuthLayout>
</template>
