<template>
  <Head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />

    <link
      rel="preconnect"
      crossorigin="anonymous"
      href="https://fonts.gstatic.com"
    />

    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
    />

    <Title>Taskless</Title>
  </Head>

  <div
    class="flex flex-col min-h-screen bg-app-gray-900 text-app-gray-50 font-sans"
  >
    <Header />

    <main class="flex flex-col flex-1 px-4 pb-5">
      <div class="w-full mx-auto max-w-[1200px] flex flex-col flex-1">
        <slot />
      </div>
    </main>
  </div>
</template>
