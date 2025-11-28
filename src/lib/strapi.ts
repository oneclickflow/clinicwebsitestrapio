/**
 * Get the Strapi URL from environment variables
 * @param path Path to append to the URL
 * @returns Full URL
 */
export function getStrapiURL(path = "") {
    return `${process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"
        }${path}`;
}

/**
 * Helper to make GET requests to Strapi API endpoints
 * @param path Path of the API route
 * @param urlParamsObject URL parameters object, will be stringified
 * @param options Options passed to fetch
 * @returns Parsed API response
 */
export async function fetchAPI(
    path: string,
    urlParamsObject = {},
    options = {}
) {
    try {
        // Merge default and user options
        const mergedOptions = {
            headers: {
                "Content-Type": "application/json",
            },
            ...options,
        };

        // Build request URL
        const queryString = Object.keys(urlParamsObject).length
            ? `?${new URLSearchParams(urlParamsObject as any).toString()}`
            : "";

        const requestUrl = `${getStrapiURL(
            `/api${path}`
        )}${queryString}`;

        // Trigger API call
        const response = await fetch(requestUrl, mergedOptions);

        // Handle response
        if (!response.ok) {
            console.error(response.statusText);
            return null;
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

/**
 * Helper to get the full image URL
 * @param url URL from Strapi
 * @returns Full URL
 */
export function getStrapiMedia(url: string | null) {
    if (url == null) {
        return null;
    }

    // Return the full URL if the media is hosted on an external provider
    if (url.startsWith("http") || url.startsWith("//")) {
        return url;
    }

    // Otherwise prepend the Strapi URL
    return `${getStrapiURL()}${url}`;
}
