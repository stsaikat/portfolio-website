// Career content shared by the About page and scripts/generate-resume.mjs, so the
// site and the downloadable PDF can never drift apart.

export const experience = [
    {
        role: 'AI Engineer',
        company: 'BrainCraft Ltd',
        location: 'Dhaka, Bangladesh',
        period: 'December 2022 - Present',
        achievements: [
            'Engineered the generative AI image pipeline behind Cartoon.ai, propelling it to top-grossing status on the App Store',
            'Built AI photo enhancement modules — upscaling, deblurring, denoising and artifact removal — improving image quality for over 500K users',
            'Co-developed and deployed a semantic image segmentation model serving a user base exceeding 10 million',
            'Implemented text-to-image and text-to-GIF generation on stable diffusion models in Python, combining modern ML techniques with classical image processing',
        ],
    },
    {
        role: 'Software Engineer',
        company: 'BrainCraft Ltd',
        location: 'Dhaka, Bangladesh',
        period: 'January 2022 - November 2022',
        achievements: [
            'Designed an image-to-video module on OpenGL ES and the MediaCodec API for the GIFMaker and Add Music to Video Android apps, together passing 250K downloads',
            'Wrote a core video encoder/decoder in C++ on the Android NDK, raising efficiency on low-end devices and expanding device availability by 22%',
            'Led a team of four delivering the BgRemover and Slideshow apps using MVVM, custom rendering and advanced video encode/decode',
        ],
    },
    {
        role: 'Software Engineer',
        company: 'LiiLab',
        location: 'Sylhet, Bangladesh',
        period: 'January 2021 - December 2021',
        achievements: [
            'Architected the Intro Maker app on Canvas and native Android APIs, reaching over 100K Play Store downloads',
            'Rebuilt GkQuiz’s rank list on Firebase Realtime Database and Firestore for a 4x performance gain, serving over 250K users',
        ],
    },
];

export const community = [
    {
        role: 'Admin & Community Leader',
        company: 'Shuddho Social Org',
        period: 'Present',
        achievements: [
            'Leading community development initiatives and fostering social responsibility',
            'Organizing events and managing volunteer teams for social impact projects',
        ],
    },
    {
        role: 'DS & Algorithms Mentor',
        company: 'Independent',
        period: '2019 - Present',
        achievements: [
            'Mentored 200+ students in data structures and algorithms',
            'Guided students through competitive programming and technical interviews',
        ],
    },
];

export const education = {
    school: 'Shahjalal University of Science and Technology',
    degree: "Bachelor's in Mathematics",
    period: '2015 - 2020',
    coursework: [
        {
            category: 'Mathematics',
            icon: 'Book',
            courses: [
                'Linear Algebra',
                'Real Analysis',
                'Abstract Algebra',
                'Numerical Analysis',
                'Optimization Theory',
                'Graph Theory',
            ],
        },
        {
            category: 'Statistics & Probability',
            icon: 'BarChart2',
            courses: [
                'Probability Theory',
                'Statistical Inference',
                'Stochastic Processes',
                'Bayesian Statistics',
                'Regression Analysis',
            ],
        },
        {
            category: 'Computer Science',
            icon: 'Code',
            courses: [
                'Data Structures & Algorithms',
                'Operating Systems',
                'Database Systems',
                'Computer Networks',
                'Software Engineering',
            ],
        },
    ],
};

export const skills = [
    {
        category: 'AI & Machine Learning',
        items: [
            'Deep Learning',
            'Diffusion Models',
            'Computer Vision',
            'Image Segmentation',
            'Super Resolution',
            'LLMs & RAG',
            'On-Device AI',
            'Model Optimization',
        ],
    },
    {
        category: 'ML & Data Tooling',
        items: ['PyTorch', 'Transformers', 'OpenCV', 'NumPy', 'Scikit-learn', 'FastAPI', 'Docker', 'Gradio'],
    },
    {
        category: 'Languages',
        items: ['Python', 'C++', 'Kotlin', 'Java', 'Swift'],
    },
    {
        category: 'Mobile & Graphics',
        items: ['Android (Kotlin/Java)', 'Android NDK', 'OpenGL ES', 'GLSL Shaders', 'Metal', 'MediaCodec', 'iOS (Swift)'],
    },
    {
        category: 'Data & Infrastructure',
        items: ['Vector Databases', 'MySQL', 'SQLite', 'Git', 'Agile', 'MVVM & MVC'],
    },
    {
        category: 'Algorithms',
        items: ['Data Structures & Algorithms', 'Dynamic Programming', 'Graph Theory', 'Number Theory'],
    },
];

export const expertise = [
    {
        icon: 'Cpu',
        title: 'Generative AI & Diffusion Models',
        body: 'Production text-to-image, text-to-GIF, image-to-video and faceswap pipelines for image and video generation, enhancement and transformation.',
    },
    {
        icon: 'Eye',
        title: 'Computer Vision at Scale',
        body: 'Segmentation, classification, denoising and super-resolution models deployed to commercial apps reaching over 10 million users.',
    },
    {
        icon: 'Smartphone',
        title: 'Mobile & Multimedia Engineering',
        body: 'Android internals, OpenGL ES and Metal rendering, and multimedia modules in Java, Kotlin and C++ tuned for low-end devices.',
    },
    {
        icon: 'Activity',
        title: 'Research & R&D Pipelines',
        body: 'Training and fine-tuning with PyTorch, Transformers and vector databases, including semantic image search and custom classification pipelines.',
    },
];
