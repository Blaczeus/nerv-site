<script setup lang="ts">
import { Head, Form, Link } from '@inertiajs/vue3'
import { update } from '@/routes/password'
import { login } from '@/routes'
import AuthLayout from '@/layouts/AuthLayout.vue'
import Spinner from '@/components/ui/spinner/Spinner.vue'
import { ref } from 'vue'

const props = defineProps<{
    token: string
    email: string
}>()

const showPassword = ref(false)
</script>

<template>

    <Head title="Reset Password | Nervego" />

    <AuthLayout>
        <Transition name="auth" mode="out-in">
            <div v-if="true" key="reset-password" class="page-content">
                <div class="section-full site-bg-black d-flex align-items-center" style="min-height: 100vh;">
                    <div class="container py-5">
                        <div class="section-content">
                            <div class="kv-contact-section wow fadeInDown" data-wow-delay="0.2">
                                <div class="row">

                                    <!-- FORM -->
                                    <div class="col-xl-6 col-lg-12 col-md-12 auth-form-wrapper">
                                        <div class="kv-contact-page-form site-bg-primary h-100">

                                            <div class="section-head left">
                                                <div class="kv-sm-title left">Security update</div>
                                                <h2 class="kv-large-title site-text-white">
                                                    Reset password
                                                </h2>
                                            </div>

                                            <div class="contact-form-outer">
                                                <Form v-bind="update.form()" :transform="data => ({
                                                    ...data,
                                                    token,
                                                    email: props.email
                                                })" :reset-on-success="['password', 'password_confirmation']"
                                                    v-slot="{ errors, processing }" class="cons-contact-form">
                                                    <div class="row">

                                                        <!-- EMAIL (READONLY) -->
                                                        <div class="col-lg-12">
                                                            <div class="form-group mb-4">
                                                                <input type="email" name="email" :value="email" readonly
                                                                    class="form-control text-white opacity-75" />
                                                                <small v-if="errors.email"
                                                                    class="text-danger d-block mt-1">
                                                                    {{ errors.email }}
                                                                </small>
                                                            </div>
                                                        </div>

                                                        <!-- PASSWORD -->
                                                        <div class="col-lg-6">
                                                            <div class="form-group mb-4">
                                                                <input :type="showPassword ? 'text' : 'password'"
                                                                    name="password"
                                                                    class="form-control text-white placeholder:text-gray-400"
                                                                    placeholder="New password" required autofocus />
                                                                <small v-if="errors.password"
                                                                    class="text-danger d-block mt-1">
                                                                    {{ errors.password }}
                                                                </small>
                                                            </div>
                                                        </div>

                                                        <!-- CONFIRM PASSWORD -->
                                                        <div class="col-lg-6">
                                                            <div class="form-group mb-4">
                                                                <input :type="showPassword ? 'text' : 'password'"
                                                                    name="password_confirmation"
                                                                    class="form-control text-white placeholder:text-gray-400"
                                                                    placeholder="Confirm password" required />
                                                                <small v-if="errors.password_confirmation"
                                                                    class="text-danger d-block mt-1">
                                                                    {{ errors.password_confirmation }}
                                                                </small>
                                                            </div>
                                                        </div>

                                                        <!-- SHOW PASSWORD -->
                                                        <div class="col-lg-12 mb-4 d-flex justify-content-end">
                                                            <label
                                                                class="site-text-white d-flex align-items-center gap-2 cursor-pointer">
                                                                <input type="checkbox" v-model="showPassword" />
                                                                <span>
                                                                    {{ showPassword ? 'Hide' : 'Show' }} password
                                                                </span>
                                                            </label>
                                                        </div>

                                                        <!-- SUBMIT -->
                                                        <div class="col-lg-12">
                                                            <button type="submit"
                                                                class="site-button dark-bg w-100 d-flex align-items-center justify-content-center"
                                                                :disabled="processing">
                                                                <Spinner v-if="processing" />
                                                                <span class="ms-2">
                                                                    {{ processing ? 'Resetting…' : 'Reset password' }}
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
                                    <div class="col-xl-6 col-lg-12 col-md-12 auth-right-panel">
                                        <div
                                            class="kv-contact-page-detail h-100 d-flex flex-column justify-content-center">
                                            <div class="section-head left">
                                                <h2 class="kv-large-title site-text-white">
                                                    Set a new secure password
                                                </h2>
                                                <p class="p-text">
                                                    Choose a strong password to keep your Nervego account protected.
                                                </p>
                                            </div>

                                            <div class="row">
                                                <div class="col-md-6 col-sm-6">
                                                    <div class="kv-icon-style-left">
                                                        <div class="kv-media">
                                                            <i class="feather feather-lock"></i>
                                                        </div>
                                                        <div class="kv-content">
                                                            <h3 class="kv-title">Strong security</h3>
                                                            <p>Encrypted credentials</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="col-md-6 col-sm-6">
                                                    <div class="kv-icon-style-left">
                                                        <div class="kv-media">
                                                            <i class="feather feather-shield"></i>
                                                        </div>
                                                        <div class="kv-content">
                                                            <h3 class="kv-title">Account safety</h3>
                                                            <p>Your access stays protected</p>
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
