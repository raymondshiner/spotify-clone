import { test, expect, Page } from "@playwright/test";

const assertButtonVisible = async (page: Page, name: string) => {
    await expect(page.getByRole("button", { name: name })).toBeVisible();
};

test.describe("Main Navigation", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("/");
    });

    test("displays main navigation", async ({ page }) => {
        await assertButtonVisible(page, "Home");
        await assertButtonVisible(page, "Search");
    });

    test("displays your library section main navigation", async ({ page }) => {
        await assertButtonVisible(page, "Your Library");

        await expect(page.getByTestId("add-playlist-button")).toBeVisible();

        await assertButtonVisible(page, "Playlists");
        await assertButtonVisible(page, "Podcasts & Shows");
        await assertButtonVisible(page, "Albums");
        await assertButtonVisible(page, "Artists");
        await assertButtonVisible(page, "Downloaded");
    });

    test("displays new playlist actions when add playlist button is pressed", async ({
        page,
    }) => {
        const addPlaylistButton = await page.getByTestId("add-playlist-button");
        await expect(page.getByText("Create a new playlist")).not.toBeVisible();
        await expect(
            page.getByText("Create a playlist folder")
        ).not.toBeVisible();

        await addPlaylistButton.click();
        await expect(page.getByText("Create a new playlist")).toBeVisible();
        await expect(page.getByText("Create a playlist folder")).toBeVisible();
    });
});
