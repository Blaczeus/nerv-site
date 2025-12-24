<script setup lang="ts">
import { Head, Form } from '@inertiajs/vue3'
import AuthLayout from '@/layouts/AuthLayout.vue'
import Spinner from '@/components/ui/spinner/Spinner.vue'
import { store } from '@/routes/password/confirm'
import { ref } from 'vue'

const showPassword = ref(false)
</script>

<template>

    <Head title="Confirm Password | Nervego" />

    <AuthLayout>
        <Transition name="auth" mode="out-in">
            <div key="confirm-password" class="page-content">
                <div class="section-full site-bg-black d-flex align-items-center" style="min-height: 100vh;">
                    <div class="container py-5">
                        <div class="section-content">
                            <div class="kv-contact-section wow fadeInDown" data-wow-delay="0.2">
                                <div class="row">

                                    <!-- FORM -->
                                    <div class="col-xl-6 col-lg-12 col-md-12">
                                        <div class="kv-contact-page-form site-bg-primary h-100">

                                            <div class="section-head left">
                                                <div class="kv-sm-title left">Security check</div>
                                                <h2 class="kv-large-title site-text-white">
                                                    Confirm password
                                                </h2>
                                            </div>

                                            <div class="contact-form-outer">
                                                <Form v-bind="store.form()" reset-on-success
                                                    v-slot="{ errors, processing }" class="cons-contact-form">
                                                    <div class="row">

                                                        <!-- PASSWORD -->
                                                        <div class="col-lg-12">
                                                            <div class="form-group mb-4">
                                                                <input :type="showPassword ? 'text' : 'password'"
                                                                    name="password"
                                                                    class="form-control text-white placeholder:text-gray-400"
                                                                    placeholder="Enter your password" required
                                                                    autofocus />
                                                                <small v-if="errors.password"
                                                                    class="text-danger d-block mt-1">
                                                                    {{ errors.password }}
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
                                                                    {{ processing ? 'Confirming…' : 'Confirm password'
                                                                    }}
                                                                </span>
                                                            </button>
                                                        </div>

                                                    </div>
                                                </Form>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- INFO -->
                                    <div class="col-xl-6 col-lg-12 col-md-12">
                                        <div
                                            class="kv-contact-page-detail h-100 d-flex flex-column justify-content-center">
                                            <div class="section-head left">
                                                <h2 class="kv-large-title site-text-white">
                                                    Extra layer of protection
                                                </h2>
                                                <p class="p-text">
                                                    Please confirm your password to continue accessing this secure
                                                    area.
                                                </p>
                                            </div>

                                            <div class="row">

                                                <div class="col-md-6 col-sm-6">
                                                    <div class="kv-icon-style-left">
                                                        <div class="kv-media">
                                                            <i class="feather feather-lock"></i>
                                                        </div>
                                                        <div class="kv-content">
                                                            <h3 class="kv-title">Secure action</h3>
                                                            <p>Identity verification</p>
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
                                                            <p>Protection ensured</p>
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
