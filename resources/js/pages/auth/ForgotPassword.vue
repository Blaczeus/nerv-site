<script setup lang="ts">
import { Head, Form, Link } from '@inertiajs/vue3'
import { email } from '@/routes/password'
import { login } from '@/routes'
import AuthLayout from '@/layouts/AuthLayout.vue'
import Spinner from '@/components/ui/spinner/Spinner.vue'

defineProps<{
    status?: string
}>()
</script>

<template>

    <Head title="Forgot Password | Nervego" />
    <AuthLayout>
        <Transition name="auth" mode="out-in">  
            <div v-if="true" key="forgot-password" class="page-content">
                <div class="section-full site-bg-black d-flex align-items-center" style="min-height: 100vh;">
                    <div class="container py-5">
                        <div class="section-content">
                            <div class="kv-contact-section wow fadeInDown" data-wow-delay="0.2">
                                <div class="row">

                                    <!-- FORM -->
                                    <div class="col-xl-6 col-lg-12 col-md-12">
                                        <div class="kv-contact-page-form site-bg-primary h-100">

                                            <div class="section-head left">
                                                <div class="kv-sm-title left">Password recovery</div>
                                                <h2 class="kv-large-title site-text-white">
                                                    Forgot password
                                                </h2>
                                            </div>

                                            <div class="contact-form-outer">
                                                <div v-if="status" class="mb-4 text-success">
                                                    {{ status }}
                                                </div>

                                                <Form v-bind="email.form()" v-slot="{ errors, processing }"
                                                    class="cons-contact-form">
                                                    <div class="row">

                                                        <div class="col-lg-12">
                                                            <div class="form-group mb-4">
                                                                <input type="email" name="email"
                                                                    class="form-control text-white placeholder:text-gray-400"
                                                                    placeholder="Email address" required autofocus />
                                                                <small v-if="errors.email"
                                                                    class="text-danger d-block mt-1">
                                                                    {{ errors.email }}
                                                                </small>
                                                            </div>
                                                        </div>

                                                        <div class="col-lg-12">
                                                            <button type="submit"
                                                                class="site-button dark-bg w-100 d-flex align-items-center justify-content-center"
                                                                :disabled="processing">
                                                                <Spinner v-if="processing" />
                                                                <span class="ms-2">
                                                                    {{ processing ? 'Sending link…' : 'Email reset link'
                                                                    }}
                                                                </span>
                                                            </button>
                                                        </div>

                                                    </div>
                                                </Form>

                                                <div class="text-center mt-4 site-text-white">
                                                    Remembered your password?
                                                    <Link :href="login()">Log in</Link>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <!-- INFO -->
                                    <div class="col-xl-6 col-lg-12 col-md-12">
                                        <div class="kv-contact-page-detail h-100 d-flex flex-column justify-content-center">

                                            <div class="section-head left">
                                                <h2 class="kv-large-title site-text-white">
                                                    Reset your access securely
                                                </h2>
                                                <p class="p-text">
                                                    Enter your email and we’ll send you a secure link to reset your
                                                    password.
                                                </p>
                                            </div>

                                            <div class="row">

                                                <div class="col-md-6 col-sm-6">
                                                    <div class="kv-icon-style-left">
                                                        <div class="kv-media">
                                                            <i class="feather feather-mail"></i>
                                                        </div>
                                                        <div class="kv-content">
                                                            <h3 class="kv-title">Email Link</h3>
                                                            <p>Secure reset access</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="col-md-6 col-sm-6">
                                                    <div class="kv-icon-style-left">
                                                        <div class="kv-media">
                                                            <i class="feather feather-shield"></i>
                                                        </div>
                                                        <div class="kv-content">
                                                            <h3 class="kv-title">Protected</h3>
                                                            <p>Your account stays safe</p>
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
     