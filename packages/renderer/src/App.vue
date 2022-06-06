<template>
  <n-config-provider :theme-overrides="{ common: { fontWeightStrong: '600' } }">
    <n-message-provider>
      <n-notification-provider>
        <router-view />
      </n-notification-provider>
    </n-message-provider>
  </n-config-provider>
</template>