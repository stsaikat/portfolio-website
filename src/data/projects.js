// Project content. `stack` renders as tech chips, `metric` as a headline badge —
// keep metrics to numbers you can defend in an interview.

export const featuredProjects = [
    {
        title: 'Cartoon AI - AI Art Generator',
        image: '/assets/imgs/projects/cartoon_ai.webp',
        link: 'https://apps.apple.com/us/app/cartoon-ai-ai-art-generator/id6469111220',
        linkType: 'app',
        metric: 'Top-grossing on the App Store',
        stack: ['Diffusion Models', 'PyTorch', 'Python', 'iOS'],
        bullets: [
            'Built the ML pipeline behind the app on diffusion models',
            'Implemented image-to-cartoon conversion with deep learning',
            'Tuned inference for seamless processing at production scale',
        ],
    },
    {
        title: 'Edit Up - AI Photo Video Editor',
        image: '/assets/imgs/projects/no_crop.webp',
        link: 'https://apps.apple.com/us/app/no-crop-video-pictures-fit/id1333491559',
        linkType: 'app',
        metric: '500K+ users',
        stack: ['PyTorch', 'Image Processing', 'Python', 'iOS'],
        bullets: [
            'Shipped the AI Photo Enhancer and Expander features',
            'Implemented upscaling and deblurring algorithms',
            'Built AI denoise and low-light enhancement',
            'Added old-photo restore and face restore',
        ],
    },
    {
        title: 'Diffusion From Scratch',
        image: '/assets/imgs/projects/diffusion.webp',
        link: 'https://github.com/tsunipun/diffusion-from-scratch',
        linkType: 'github',
        stack: ['PyTorch', 'Diffusion Models', 'Python'],
        description:
            'Implementation of diffusion models from scratch, demonstrating deep understanding of generative AI core concepts.',
    },
    {
        title: 'Semantic Image Search',
        image: '/assets/imgs/projects/semantic_search.webp',
        link: 'https://github.com/stsaikat/semantic-image-search',
        linkType: 'github',
        stack: ['PyTorch', 'Vector DB', 'Python'],
        description:
            'A semantic-aware image search tool that uses AI to understand and find relevant images based on meaning.',
    },
    {
        title: 'Chatbot',
        image: '/assets/imgs/projects/chatbot.webp',
        link: 'https://github.com/stsaikat/chatbot',
        linkType: 'github',
        stack: ['LangChain', 'LLM', 'Gradio', 'Python'],
        description:
            'An easy-to-use chatbot powered by an LLM via LangChain, with a Gradio interface for natural language interactions.',
    },
    {
        title: 'Shuffle - Random Video Chat',
        image: '/assets/imgs/projects/shuffle.webp',
        link: 'https://shuffle.sunipun.com/',
        linkType: 'web',
        stack: ['WebRTC', 'Socket.io', 'Node.js'],
        description:
            'A real-time random video chat application featuring partner matching, skipping, and text messaging using WebRTC and Socket.io.',
    },
];

export const professionalProjects = [
    {
        title: 'Background Remover',
        link: 'https://play.google.com/store/apps/details?id=com.braincraftapps.droid.bgremover',
        linkType: 'app',
        metric: '10M+ users',
        stack: ['Image Segmentation', 'PyTorch', 'Android'],
        bullets: [
            'Developed AI-powered background removal',
            'Built optimized image manipulation pipelines',
            'Tuned performance across device capabilities',
        ],
    },
    {
        title: 'SlideShow Maker with Music Fx',
        link: 'https://apps.apple.com/us/app/slideshow-maker-with-music-fx/id1265026847',
        linkType: 'app',
        stack: ['Metal', 'GLSL', 'Swift', 'iOS'],
        bullets: [
            'Developed filters on the Metal framework for iOS',
            'Wrote custom GLSL shaders for effects',
            'Optimized rendering pipelines for smooth transitions',
        ],
    },
    {
        title: 'GIF Maker & Editor - GifBuz',
        link: 'https://play.google.com/store/apps/details?id=com.braincraftapps.droid.gifmaker',
        linkType: 'app',
        metric: '250K+ downloads',
        stack: ['Android', 'MediaCodec', 'OpenGL ES'],
        bullets: [
            'Developed video-to-GIF and GIF-to-video conversion',
            'Created image-to-video transformation',
            'Optimized encode/decode for smooth conversions',
        ],
    },
    {
        title: 'Add Music & Audio to Video',
        link: 'https://play.google.com/store/apps/details?id=com.braincraftapps.addmusictovideo',
        linkType: 'app',
        metric: '250K+ downloads',
        stack: ['Android', 'OpenGL ES', 'GLSL', 'C++'],
        bullets: [
            'Developed the image-to-video conversion module',
            'Implemented GLSL shaders on OpenGL ES',
            'Built the graphics drawing pipeline with filters and effects',
        ],
    },
    {
        title: 'Intro Maker - Outro Video Maker',
        link: 'https://play.google.com/store/apps/details?id=com.video_lab.video_intro_maker',
        linkType: 'app',
        metric: '100K+ downloads',
        stack: ['Android', 'Canvas API', 'Java'],
        bullets: [
            'Led project design and architecture',
            'Implemented video decoding and encoding',
            'Developed audio processing capabilities',
        ],
    },
];

export const personalProjects = [
    {
        title: 'Classification Made Easy',
        link: 'https://github.com/tsunipun/classification-made-easy',
        linkType: 'github',
        stack: ['PyTorch', 'Python'],
        description: 'A library that streamlines classification training, validation and testing.',
    },
    {
        title: 'On-Device AI',
        link: 'https://github.com/stsaikat/ondevice-ai',
        linkType: 'github',
        stack: ['On-Device AI', 'PyTorch'],
        description: 'Projects and experiments with on-device AI implementations for mobile applications.',
    },
    {
        title: 'Super Resolution',
        link: 'https://github.com/stsaikat/super-resolution',
        linkType: 'github',
        stack: ['PyTorch', 'Computer Vision'],
        description: 'AI-powered image super-resolution implementation for enhancing image quality.',
    },
    {
        title: 'Image Manipulation',
        link: 'https://github.com/stsaikat/image-manipulation',
        linkType: 'github',
        stack: ['OpenCV', 'Python'],
        description: 'Collection of open-source works related to image manipulation and processing.',
    },
    {
        title: 'OpenGL ES',
        link: 'https://github.com/stsaikat/Open-GL-ES',
        linkType: 'github',
        stack: ['OpenGL ES', 'Android', 'Java'],
        description: 'A collection of OpenGL ES examples and implementations for Android.',
    },
    {
        title: 'Video to Audio Converter',
        link: 'https://github.com/stsaikat/videotoaudioconverter',
        linkType: 'github',
        stack: ['Android', 'MediaCodec'],
        description: 'A tool for converting video files to audio formats with various options.',
    },
    {
        title: 'Video Editor',
        link: 'https://github.com/stsaikat/videoeditor',
        linkType: 'github',
        stack: ['Android', 'Kotlin'],
        description: 'Early-stage Android video editor — scaffolding and architecture for planned editing features.',
    },
    {
        title: 'Weekly Calendar',
        link: 'https://github.com/stsaikat/weeklycalendar',
        linkType: 'github',
        stack: ['Android', 'Java'],
        description: 'A weekly calendar application for organizing and managing schedules.',
    },
    {
        title: 'Codeforces Solutions',
        link: 'https://github.com/stsaikat/Codeforces-problem-solutions',
        linkType: 'github',
        stack: ['C++', 'Algorithms'],
        description: 'Collection of solved Codeforces problems from contest practice.',
    },
    {
        title: 'Resolution Estimator',
        link: 'https://github.com/tsunipun/resolution-estimator',
        linkType: 'github',
        stack: ['PyTorch', 'Gradio'],
        description:
            'A trained model with a Gradio demo for estimating image resolution, useful for CV preprocessing pipelines.',
    },
];
