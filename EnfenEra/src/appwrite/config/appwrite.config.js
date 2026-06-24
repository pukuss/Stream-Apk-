export const appwriteConfig = {
    ENDPOINT: import.meta.env.VITE_APPWRITE_ENDPOINT,
    PROJECT_ID: import.meta.env.VITE_APPWRITE_PROJECT_ID,
    DATABASE_ID: import.meta.env.VITE_APPWRITE_DATABASE_ID,

    tabels_id: {
        TOURNAMENT_REQUEST: import.meta.env.VITE_USER_TOURNAMENT_REQUEST_SEND,
        NOTIFICATION: import.meta.env.VITE_APPWRITE_NOTIFICATION_TABLE,
        USER_PROFILE_DATA: import.meta.env.VITE_USER_PROFILE_DATA_TABLE,
        USER_WALLET_DATA: import.meta.env.VITE_USER_WALLET_DATA_TABLE,

    },

    buckets: {
        POSTER_BUCKET: import.meta.env.VITE_APPWRITE_POSTER_BUCKET_ID,
    },

    funtions : {

    },
};
