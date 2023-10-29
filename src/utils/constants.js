const TMDB_API_KEY = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZGFmOGEzNjhiMzkwMzYyZWY1YjMzZWFjZGMyNjJiYyIsInN1YiI6IjY1M2E0NWVkYjg3YWVjMDBjM2EzMTUwYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NO8h_g4FSAixsBU-63kAEvcOtEqghux6cWAY6Ae4lJM'

export const OPTIONS = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: TMDB_API_KEY
    }
};

export const IMAGE_CDN = "https://image.tmdb.org/t/p/w500/";