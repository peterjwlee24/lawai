import { test, expect } from "@playwright/test";

test.describe("Homepage", () => {
  test("renders hero with Claude for Legal positioning", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/Claude for Legal Implementation Partner/i);

    // Hero headline references the Anthropic launch.
    await expect(page.getByRole("heading", { level: 1 })).toContainText("Claude for Legal");
    await expect(page.getByText(/initial consultation/i).first()).toBeVisible();
  });

  test("nav has a Seminars link to /seminars", async ({ page }) => {
    await page.goto("/");
    // Desktop + mobile nav both render the link; first() = desktop.
    const seminarsLink = page.getByRole("link", { name: "Seminars" }).first();
    await expect(seminarsLink).toBeVisible();
    await expect(seminarsLink).toHaveAttribute("href", "/seminars");
  });

  test("FAQ section is rendered with expected questions", async ({ page }) => {
    await page.goto("/");
    // FAQ questions are rendered as buttons (with span text), not headings.
    await expect(page.getByRole("button", { name: /What is Claude for Legal\?/i })).toBeVisible();
    await expect(page.getByRole("button", { name: /five-day sprint actually deliver/i })).toBeVisible();
  });

  test("Contact form is present and routes inquiryType", async ({ page }) => {
    await page.goto("/");
    const form = page.getByTestId("consultation-form");
    await expect(form).toBeVisible();
    await expect(form.locator("select#inquiryType")).toBeVisible();
  });

  test("Contact form: client-side validation blocks empty submit", async ({ page }) => {
    await page.goto("/");
    await page.getByTestId("consultation-submit").click();
    await expect(page.getByText(/Your full name is required/i)).toBeVisible();
    await expect(page.getByText(/Email is required/i)).toBeVisible();
    await expect(page.getByText(/Firm name is required/i)).toBeVisible();
  });

  test("Contact form: happy path submits via dev no-op mode", async ({ page }) => {
    await page.goto("/");
    await page.locator("#fullName").fill("Margaret Chen");
    await page.locator("#email").fill("mchen@example-firm.com");
    await page.locator("#firmName").fill("Chen Estate Planning LLP");
    await page.getByTestId("consultation-submit").click();
    await expect(page.getByText(/got your request/i)).toBeVisible({ timeout: 10_000 });
  });
});
