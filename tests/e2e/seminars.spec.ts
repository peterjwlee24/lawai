import { test, expect } from "@playwright/test";

test.describe("/seminars page", () => {
  test("renders hero with partner-grade positioning", async ({ page }) => {
    await page.goto("/seminars");
    await expect(page).toHaveTitle(/Partner-Grade AI Seminars/i);
    await expect(page.getByRole("heading", { level: 1 })).toContainText("AI seminar your bar counsel");
  });

  test("curriculum module count and IDs are stable", async ({ page }) => {
    await page.goto("/seminars");
    await expect(page.getByText("01", { exact: true }).first()).toBeVisible();
    await expect(page.getByText("05", { exact: true }).first()).toBeVisible();
    await expect(page.getByRole("heading", { name: /A working firm decision/i })).toBeVisible();
  });

  test("ethics section references ABA Model Rules", async ({ page }) => {
    await page.goto("/seminars");
    await expect(page.getByText("ABA Model Rule 1.1 · Competence")).toBeVisible();
    await expect(page.getByText("ABA Model Rule 1.6 · Confidentiality")).toBeVisible();
    await expect(page.getByText("ABA Model Rule 5.3 · Supervision")).toBeVisible();
  });

  test("founder section mentions Jinwoong Lee + renders portrait photo", async ({ page }) => {
    await page.goto("/seminars");
    await expect(page.getByRole("heading", { name: /Jinwoong Lee/ })).toBeVisible();
    await expect(page.getByText(/Berkeley · Cognitive Science/)).toBeVisible();
    await expect(page.getByText(/7\+ years at Amazon/)).toBeVisible();
    // Verify the real founder photo is rendered (not the navy placeholder gradient).
    const portrait = page.getByAltText(/Portrait of Jinwoong Lee/i);
    await expect(portrait).toBeVisible();
  });

  test("nav anchor links route back to home from /seminars", async ({ page }) => {
    await page.goto("/seminars");
    // The bug we're locking in a fix for: clicking "How it works" on /seminars
    // used to do nothing because document.querySelector("#how-it-works") was null.
    // The fix routes via /#how-it-works so the click navigates home + scrolls.
    const howItWorksLink = page.getByRole("link", { name: "How it works" }).first();
    await expect(howItWorksLink).toHaveAttribute("href", "/#how-it-works");
    await howItWorksLink.click();
    await expect(page).toHaveURL(/\/#how-it-works/);
    // The home page should now be loaded with the How It Works section visible.
    await expect(page.getByRole("heading", { name: /From a live call/i })).toBeVisible({ timeout: 10_000 });
  });

  test("seminar inquiry form requires firmRole + seminarFormat + phone", async ({ page }) => {
    await page.goto("/seminars");
    const form = page.getByTestId("seminar-form");
    await expect(form).toBeVisible();

    await page.getByTestId("seminar-submit").click();
    // The seminar form requires phone, role, and format on top of the basics.
    await expect(form.getByText(/phone number is required/i)).toBeVisible();
    await expect(form.getByText(/Select your role at the firm/i)).toBeVisible();
    await expect(form.getByText(/Pick a session length/i)).toBeVisible();
  });

  test("seminar form happy path submits via dev no-op mode", async ({ page }) => {
    await page.goto("/seminars");
    await page.locator("#seminar-fullName").fill("Margaret Chen");
    await page.locator("#seminar-email").fill("mchen@example-firm.com");
    await page.locator("#seminar-firmName").fill("Chen Estate Planning LLP");
    await page.locator("#seminar-phoneNumber").fill("+1 (312) 555-0142");
    await page.locator("#seminar-firmRole").selectOption("managing-partner");
    await page.locator("#seminar-seminarFormat").selectOption("half-day");
    await page.getByTestId("seminar-submit").click();
    await expect(page.getByText(/Seminar request received/i)).toBeVisible({ timeout: 10_000 });
  });
});
