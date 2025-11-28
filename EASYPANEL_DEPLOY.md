# Deploying to Easypanel (Contabo)

Since you already have Easypanel running on your Contabo server with Strapi deployed, here is how to deploy your website (Frontend) and connect them.

## 1. Prepare Your Project

I have already added the necessary files for a Docker-based deployment:
- `Dockerfile`: Instructions for building your app.
- `.dockerignore`: Files to ignore during build.
- `next.config.ts`: Updated with `output: 'standalone'` for better performance.

**Action Required:**
1.  Push your updated code to a Git repository (GitHub, GitLab, etc.).
    *   *If you haven't initialized git yet:*
        \`\`\`bash
        git init
        git add .
        git commit -m "Ready for deployment"
        # Add your remote origin and push
        \`\`\`

## 2. Create App in Easypanel

1.  Log in to your Easypanel dashboard.
2.  Create a **New Project** (e.g., "Clinic Website") or use the existing one where Strapi is.
3.  Click **+ Service** > **App**.
4.  Select **Source**: `Git`.
5.  Enter your Repository URL (e.g., `https://github.com/yourusername/diego_website_v2`).
6.  (Optional) If private, configure the credentials/token.

## 3. Configure the Service

Easypanel will detect the `Dockerfile` automatically.

1.  **Build Type**: Ensure it is set to `Docker`.
2.  **Environment Variables**: You MUST set this to connect to your Strapi instance.
    *   Go to the **Environment** tab.
    *   Add New Variable:
        *   Key: `NEXT_PUBLIC_STRAPI_API_URL`
        *   Value: `https://your-strapi-domain.com` (Replace with the actual URL of your deployed Strapi)
3.  **Domains**:
    *   Go to the **Domains** tab.
    *   Add your website domain (e.g., `clinic-website.yourdomain.com` or `www.tudominio.com`).
    *   Easypanel will automatically handle SSL (HTTPS) for you.

## 4. Deploy

1.  Click **Deploy** or **Save & Deploy**.
2.  Watch the logs. It will download dependencies, build the Next.js app, and start it.
3.  Once the status is "Running", visit your domain.

## 5. Important: Connect Strapi to Frontend

For images to work correctly, your Strapi instance needs to know about your frontend (if you have CORS enabled).

1.  Go to your **Strapi** service in Easypanel.
2.  Check the environment variables or `config/middlewares.js` in your Strapi code to ensure it allows requests from your new frontend domain.
    *   *Note: If you haven't touched CORS settings in Strapi, it defaults to allowing all (`*`), so it might just work out of the box.*

## Troubleshooting

-   **Build Fails?** Check the logs. If it's a memory issue (common on small VPS), you might need to increase swap on your server or upgrade the plan.
-   **Images Broken?**
    *   Check if `NEXT_PUBLIC_STRAPI_API_URL` is correct (no trailing slash usually, but my code handles it).
    *   Check if the image URLs in the HTML are pointing to the correct Strapi domain.
