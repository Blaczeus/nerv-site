<script setup lang="ts">
import InputError from '@/components/InputError.vue'
import Spinner from '@/components/ui/spinner/Spinner.vue'
import {
    PinInput,
    PinInputGroup,
    PinInputSlot,
} from '@/components/ui/pin-input'
import AuthLayout from '@/layouts/AuthLayout.vue'
import { store } from '@/routes/two-factor/login'
import { Form, Head } from '@inertiajs/vue3'
import { computed, ref } from 'vue'

const showRecoveryInput = ref(false)

const code = ref<number[]>([])
const codeValue = computed(() => code.value.join(''))

const authContent = computed(() => {
    return showRecoveryInput.value
        ? {
            title: 'Recovery code',
            description:
                'Enter one of your emergency recovery codes to continue.',
            toggle: 'Use authentication code instead',
        }
        : {
            title: 'Authentication code',
            description:
                'Enter the 6-digit code from your authenticator app.',
            toggle: 'Use a recovery code instead',
        }
})

const toggleMode = (clearErrors: () => void) => {
    showRecoveryInput.value = !showRecoveryInput.value
    clearErrors()
    code.value = []
}
</script>

<template>

    <Head title="Two-Factor Authentication | Nervego" />

    <AuthLayout>
        <Transition name="auth" mode="out-in">
            <div v-if="true" key="two-factor" class="page-content">
                <div class="section-full site-bg-black d-flex align-items-center" style="min-height: 100vh">
                    <div class="container py-5">
                        <div class="section-content">
                            <div class="kv-contact-section wow fadeInDown" data-wow-delay="0.2s">
                                <div class="row">

                                    <!-- FORM -->
                                    <div class="col-xl-6 col-lg-12 auth-form-wrapper">
                                        <div class="kv-contact-page-form site-bg-primary h-100">
                                            <div class="section-head left">
                                                <div class="kv-sm-title left">
                                                    Security check
                                                </div>
                                                <h2 class="kv-large-title site-text-white">
                                                    {{ authContent.title }}
                                                </h2>
                                                <p class="p-text">
                                                    {{ authContent.description }}
                                                </p>
                                            </div>

                                            <!-- AUTH CODE -->
                                            <Form v-if="!showRecoveryInput" v-bind="store.form()"
                                                class="cons-contact-form" reset-on-error @error="code = []" v-slot="{
                                                    errors,
                                                    processing,
                                                    clearErrors,
                                                }">
                                                <input type="hidden" name="code" :value="codeValue" />

                                                <div class="d-flex justify-content-center mb-4">
                                                    <PinInput v-model="code" otp type="number" placeholder=""
                                                        class="twofa-pin">
                                                        <PinInputGroup
                                                            class="d-flex justify-content-center gap-2 flex-nowrap">
                                                            <PinInputSlot v-for="i in 6" :key="i" :index="i - 1"
                                                                :disabled="processing" class="twofa-slot" />
                                                        </PinInputGroup>
                                                    </PinInput>
                                                </div>

                                                <InputError :message="errors.code"
                                                    class="text-center mb-3 text-danger" />

                                                <button type="submit"
                                                    class="site-button dark-bg w-100 d-flex justify-content-center align-items-center"
                                                    :disabled="processing">
                                                    <Spinner v-if="processing" />
                                                    <span class="ms-2">
                                                        Continue
                                                    </span>
                                                </button>
                                                <div class="text-center mt-4 site-text-white">
                                                    <span>Or </span>
                                                    <span class="auth-toggle-link" @click="toggleMode(clearErrors)">
                                                        {{ authContent.toggle }}
                                                    </span>
                                                </div>

                                            </Form>

                                            <!-- RECOVERY CODE -->
                                            <Form v-else v-bind="store.form()" class="cons-contact-form" reset-on-error
                                                v-slot="{
                                                    errors,
                                                    processing,
                                                    clearErrors,
                                                }">
                                                <div class="form-group mb-4">
                                                    <input type="text" name="recovery_code"
                                                        class="form-control text-white" placeholder="Recovery code"
                                                        autofocus required />
                                                    <InputError :message="errors.recovery_code
                                                        " class="mt-2" />
                                                </div>

                                                <button type="submit"
                                                    class="site-button dark-bg w-100 d-flex justify-content-center align-items-center"
                                                    :disabled="processing">
                                                    <Spinner v-if="processing" />
                                                    <span class="ms-2">
                                                        Continue
                                                    </span>
                                                </button>

                                                <div class="text-center mt-4 site-text-white">
                                                    <span>Or </span>
                                                    <span class="auth-toggle-link" @click="toggleMode(clearErrors)">
                                                        {{ authContent.toggle }}
                                                    </span>
                                                </div>
                                            </Form>
                                        </div>
                                    </div>

                                    <!-- INFO -->
                                    <div class="col-xl-6 col-lg-12 auth-right-panel">
                                        <div
                                            class="kv-contact-page-detail h-100 d-flex flex-column justify-content-center">
                                            <div class="section-head left">
                                                <h2 class="kv-large-title site-text-white">
                                                    Extra security layer
                                                </h2>
                                                <p class="p-text">
                                                    Two-factor authentication
                                                    protects your account even if
                                                    your password is compromised.
                                                </p>
                                            </div>

                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="kv-icon-style-left">
                                                        <div class="kv-media">
                                                            <i class="feather feather-lock"></i>
                                                        </div>
                                                        <div class="kv-content">
                                                            <h3 class="kv-title">
                                                                Secure
                                                            </h3>
                                                            <p>
                                                                Extra account
                                                                protection
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="col-md-6">
                                                    <div class="kv-icon-style-left">
                                                        <div class="kv-media">
                                                            <i class="feather feather-smartphone"></i>
                                                        </div>
                                                        <div class="kv-content">
                                                            <h3 class="kv-title">
                                                                Flexible
                                                            </h3>
                                                            <p>
                                                                App or recovery
                                                                code
                                                            </p>
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
