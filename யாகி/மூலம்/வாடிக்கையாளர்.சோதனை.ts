
import { நிரல்மொழிகள், பதிப்பு_கண்டறி } from "../மூலம்/லஸ்ஸியிலக்கணங்கள்/வாடிக்கையாளர்"

describe("லஸ்ஸியிலக்கணங்கள்", function() {
  describe("நிரல்மொழிகள் சோதனை", function() {
    it("கிடைக்கும் நிரல்மொழிகள் பின்கொடுக்க வேண்டும்", function() {
      expect(நிரல்மொழிகள்).to.be.an("array").and.to.have.lengthOf.above(1)
    });
  });


});