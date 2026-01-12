<script setup lang="ts">
import { Spinner } from '@/components/ui/spinner';
import AuthLayout from '@/layouts/AuthLayout.vue';
import { logout } from '@/routes';
import { send } from '@/routes/verification';
import { Form, Head } from '@inertiajs/vue3';

defineProps<{
    status?: string;
}>();
</script>

<template>

    <Head title="Verify Email | Nervego" />

    <AuthLayout>
        <Transition name="auth" mode="out-in">
            <div v-if="true" key="verify-email" class="page-content">
                <div class="section-full site-bg-black d-flex align-items-center" style="min-height: 100vh;">
                    <div class="container py-5">
                        <div class="section-content">
                            <div class="kv-contact-section">
                                <div class="row">

                                    <!-- FORM -->
                                    <div class="col-xl-6 col-lg-12 col-md-12 auth-form-wrapper">
                                        <div
                                            class="kv-contact-page-form site-bg-primary h-100 d-flex flex-column justify-content-center">

                                            <div class="section-head left">
                                                <div class="kv-sm-title left">Verify email</div>
                                                <h2 class="kv-large-title site-text-white">Email verification</h2>
                                                <p class="p-text site-text-white">
                                                    Please verify your email address by clicking on the link we just
                                                    emailed to you.
                                                </p>
                                            </div>

                                            <Form v-bind="send.form()" v-slot="{ processing }"
                                                class="cons-contact-form">
                                                <div class="col-md-12 mb-4">
                                                    <button type="submit"
                                                        class="site-button dark-bg w-100 d-flex align-items-center justify-content-center"
                                                        :disabled="processing">
                                                        <Spinner v-if="processing" />
                                                        <span class="ms-2">
                                                            {{ processing ? 'Sending…' : 'Resend verification email' }}
                                                        </span>
                                                    </button>
                                                </div>

                                                <div class="text-center mt-4 site-text-white">
                                                    <span>or </span>
                                                    <span class="auth-toggle-link" @click="$inertia.post(logout())">
                                                        Log out
                                                    </span>
                                                </div>

                                                <div v-if="status === 'verification-link-sent'"
                                                    class="mt-3 text-center text-green-600">
                                                    A new verification link has been sent to your email address.
                                                </div>
                                            </Form>

                                        </div>
                                    </div>

                                    <!-- INFO / ILLUSTRATION -->
                                    <div class="col-xl-6 col-lg-12 col-md-12 auth-right-panel">
                                        <div
                                            class="kv-contact-page-detail h-100 d-flex flex-column justify-content-center">

                                            <div class="section-head left">
                                                <h2 class="kv-large-title site-text-white">
                                                    Secure and easy
                                                </h2>
                                                <p class="p-text site-text-white">
                                                    You can resend the verification email at any time. Make sure to
                                                    check your inbox and spam folder.
                                                </p>
                                            </div>

                                            <div class="row mt-4">
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
