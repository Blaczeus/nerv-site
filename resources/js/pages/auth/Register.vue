<script setup lang="ts">
import { Head, Form, Link } from '@inertiajs/vue3'
import AuthLayout from '@/layouts/AuthLayout.vue'
import { store } from '@/routes/register'
import { login } from '@/routes'
import Spinner from '@/components/ui/spinner/Spinner.vue'
import { ref } from 'vue'

const showPassword = ref(false)

</script>

<template>

    <Head title="Register | Nervego" />
    <AuthLayout>
        <Transition name="auth" mode="out-in">
            <div v-if="true" key="register" class="page-content">
                <div class="section-full site-bg-black d-flex align-items-center" style="min-height: 100vh;">
                    <div class="container py-5">
                        <div class="section-content">
                            <div class="kv-contact-section">
                                <div class="row">
        
                                    <!-- REGISTER FORM -->
                                    <div class="col-xl-6 col-lg-12 col-md-12">
                                        <div class="kv-contact-page-form site-bg-primary h-100">
        
                                            <div class="section-head left">
                                                <div class="kv-sm-title left">Get started</div>
                                                <h2 class="kv-large-title site-text-white">Create account</h2>
                                            </div>
        
                                            <div class="contact-form-outer">
                                                <Form v-bind="store.form()"
                                                    :reset-on-success="['password', 'password_confirmation']"
                                                    v-slot="{ errors, processing }" class="cons-contact-form">
                                                    <div class="row">
        
                                                        <div class="row">
                                                            <div class="col-md-6">
                                                                <div class="form-group mb-4">
                                                                    <input type="text" name="name"
                                                                        class="form-control text-white placeholder:text-gray-400"
                                                                        placeholder="Full name" required />
                                                                    <small v-if="errors.name" class="text-danger d-block mt-1">
                                                                        {{ errors.name }}
                                                                    </small>
                                                                </div>
                                                            </div>
        
                                                            <div class="col-md-6">
                                                                <div class="form-group mb-4">
                                                                    <input type="email" name="email"
                                                                        class="form-control text-white placeholder:text-gray-400"
                                                                        placeholder="Email" required />
                                                                    <small v-if="errors.email" class="text-danger d-block mt-1">
                                                                        {{ errors.email }}
                                                                    </small>
                                                                </div>
                                                            </div>
                                                        </div>
        
                                                        <div class="row">
                                                            <div class="col-md-6">
                                                                <div class="form-group mb-4">
                                                                    <input :type="showPassword ? 'text' : 'password'"
                                                                        name="password"
                                                                        class="form-control text-white placeholder:text-gray-400"
                                                                        placeholder="Password" required />
                                                                    <small v-if="errors.password"
                                                                        class="text-danger d-block mt-1">
                                                                        {{ errors.password }}
                                                                    </small>
                                                                </div>
                                                            </div>
        
                                                            <div class="col-md-6">
                                                                <div class="form-group mb-4">
                                                                    <input :type="showPassword ? 'text' : 'password'"
                                                                        name="password_confirmation"
                                                                        class="form-control text-white placeholder:text-gray-400"
                                                                        placeholder="Confirm password" required />
                                                                </div>
                                                            </div>
                                                        </div>
        
                                                        <div
                                                            class="col-lg-12 mb-4 d-flex justify-content-between align-items-center">
                                                            <label class="site-text-white d-flex align-items-center gap-2">
                                                                <input type="checkbox" v-model="showPassword" />
                                                                <span>{{ showPassword ? 'Hide password' : 'Show password'
                                                                }}</span>
                                                            </label>
                                                        </div>
        
        
                                                        <div class="col-md-12">
                                                            <button type="submit"
                                                                class="site-button dark-bg w-100 d-flex align-items-center justify-content-center"
                                                                :disabled="processing">
                                                                <Spinner v-if="processing" />
                                                                <span class="ms-2">
                                                                    {{ processing ? 'Creating account…' : 'Register' }}
                                                                </span>
                                                            </button>
                                                        </div>
        
                                                    </div>
                                                </Form>
        
                                                <div class="text-center mt-4 site-text-white">
                                                    Already have an account?
                                                    <Link :href="login()">Log in</Link>
                                                </div>
                                            </div>
        
                                        </div>
                                    </div>
        
                                    <!-- REGISTER INFO -->
                                    <div class="col-xl-6 col-lg-12 col-md-12">
                                        <div class="kv-contact-page-detail h-100 d-flex flex-column justify-content-center">
        
                                            <div class="section-head left">
                                                <h2 class="kv-large-title site-text-white">
                                                    Join the Nervego ecosystem
                                                </h2>
                                                <p class="p-text">
                                                    Create an account to access tools, programs, and opportunities designed to
                                                    help you grow.
                                                </p>
                                            </div>
        
                                            <div class="row align-items-stretch">
                                                <div class="col-md-6 col-sm-6">
                                                    <div class="kv-icon-style-left">
                                                        <div class="kv-media">
                                                            <i class="feather feather-user-plus"></i>
                                                        </div>
                                                        <div class="kv-content">
                                                            <h3 class="kv-title">Easy Signup</h3>
                                                            <p>Quick and simple</p>
                                                        </div>
                                                    </div>
                                                </div>
        
                                                <div class="col-md-6 col-sm-6">
                                                    <div class="kv-icon-style-left">
                                                        <div class="kv-media">
                                                            <i class="feather feather-shield"></i>
                                                        </div>
                                                        <div class="kv-content">
                                                            <h3 class="kv-title">Safe & Secure</h3>
                                                            <p>We protect your data</p>
                                                        </div>
                                                    </div>
                                                </div>
        
                                                <div class="col-md-6 col-sm-6">
                                                    <div class="kv-icon-style-left">
                                                        <div class="kv-media">
                                                            <i class="feather feather-briefcase"></i>
                                                        </div>
                                                        <div class="kv-content">
                                                            <h3 class="kv-title">Opportunities</h3>
                                                            <p>Programs & careers</p>
                                                        </div>
                                                    </div>
                                                </div>
        
                                                <div class="col-md-6 col-sm-6">
                                                    <div class="kv-icon-style-left">
                                                        <div class="kv-media">
                                                            <i class="feather feather-trending-up"></i>
                                                        </div>
                                                        <div class="kv-content">
                                                            <h3 class="kv-title">Growth</h3>
                                                            <p>Learn and scale</p>
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
