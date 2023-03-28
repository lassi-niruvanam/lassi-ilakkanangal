import { லஸ்ஸி_இலக்கணங்கள் } from "@/வாடிக்கையாளர்";

describe("லஸ்ஸி இலக்கணங்கள்", function () {
  let இலக்கணங்கள்: லஸ்ஸி_இலக்கணங்கள்;
  beforeAll(() => {
    இலக்கணங்கள் = new லஸ்ஸி_இலக்கணங்கள்({});
  });
  describe("நிரல்மொழிகள் சோதனை", function () {
    it("கிடைக்கும் நிரல்மொழிகள் பின்கொடுக்க வேண்டும்", function () {
      const நிரல்மொழிகள் = இலக்கணங்கள்.நிரல்மொழிகள்;
      expect(Array.isArray(நிரல்மொழிகள்)).toBe(true);
      expect(நிரல்மொழிகள்.length > 0).toBe(true);
    });
    it("முன்னேற்றம்", () => {
      for (const நிரல்மொழி of இலக்கணங்கள்.நிரல்மொழிகள்) {
        const நிறைவு = இலக்கணங்கள்.நிறைவு({ நிரல்மொழி });
        expect(நிறைவு).toBeLessThanOrEqual(1);
        expect(நிறைவு).toBeGreaterThanOrEqual(0);
        for (const மொழி of இலக்கணங்கள்.இயற்கை_மொழிகள்({ நிரல்மொழி })) {
          const நிறைவு = இலக்கணங்கள்.நிறைவு({ நிரல்மொழி, மொழி });
          expect(நிறைவு).toBeLessThanOrEqual(1);
          expect(நிறைவு).toBeGreaterThanOrEqual(0);
        }
      }
    });
  });
});
