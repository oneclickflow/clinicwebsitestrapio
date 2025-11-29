# CMS User Manual: Managing Your Website Content

Great! Your website is live and connected to Strapi.

## Important Concept: Headless CMS vs. Elementor
It is important to understand that **Strapi is not a visual page builder** like Elementor or Wix.
*   **Elementor**: You drag and drop buttons, change colors, and move things around visually.
*   **Strapi (Headless CMS)**: You focus purely on the **content** (text, images, data). The **design** (colors, fonts, layout) is fixed in the code to ensure your site always looks professional and consistent.

**The Benefit**: You can't "break" the design. You just fill in the blanks, and the website updates automatically while keeping its premium look.

---

## How to Edit Your Content

### 1. Access the Admin Panel
Go to your Strapi URL (e.g., `https://strapi.yourdomain.com/admin`) and log in.

### 2. Editing the "Hero" (Main Top Section)
This is a **Single Type** because there is only one Hero section on the homepage.
1.  Click on **Content Manager** in the left sidebar.
2.  Under **Single Types**, click **Hero**.
3.  Here you can change:
    *   **Title**: The main big text.
    *   **Subtitle**: The smaller text below it.
    *   **Background Image**: Upload a new photo.
    *   **CTA Text/Links**: Change what the buttons say and where they go.
4.  Click **Save**.

### 3. Managing "Services" (Treatments)
This is a **Collection Type** because you have many services.
1.  Under **Collection Types**, click **Service**.
2.  **To Add a New Service**: Click **+ Create new entry**.
    *   Fill in the Title, Description.
    *   **Icon Name**: Enter the name of the icon (e.g., `Smile`, `Heart`, `Star`).
3.  **To Edit**: Click on an existing service (e.g., "Ortodoncia") and change the text.
4.  **To Reorder**: Currently, they are ordered by the `Category Index` number. Change this number to move them around.

### 4. Managing the "Medical Team"
1.  Under **Collection Types**, click **Doctor**.
2.  Create or Edit entries for each doctor.
3.  Upload their photo and fill in their bio.

---

## Using the Page Builder (Dynamic Zones)

We have enabled the **Page Builder** feature! This allows you to construct pages block-by-block.

### How to Edit the Homepage
1.  Go to **Content Manager** > **Page**.
2.  Click on the **Home** entry (slug: `home`).
3.  Scroll down to the **Blocks** section (Dynamic Zone).
4.  **To Add a Section**: Click the big **"+"** button and choose a component (e.g., `Hero`, `Services`, `Testimonials`).
5.  **To Reorder**: Click and drag the icon on the left of any block to move it up or down.
6.  **To Remove**: Click the trash icon on the right of the block.

**Note**: If you delete the "Home" page entry or remove all blocks, the website will automatically fall back to the default fixed layout, so you don't have to worry about breaking the site completely.
