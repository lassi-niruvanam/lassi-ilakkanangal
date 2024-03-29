export type நிரல்மொழி_இலக்கணம்_வகை = {
  பெயர்: string;
  நீட்சி: string;
  "இலக்கணம் ஆரம்பம்": string;
  மொழி: string;
  எண்ணுரு: string;
  பதிப்பு: {
    [பதிப்பு: string]: {
      இலக்கணம்: string;
    };
  };
};

export type மொழிபெயர்ப்பு_அகராதி_வகை = {
  [மொழி: string]: string;
};

export type நிரல்மொழி_மொழியாக்கம்_வகை = {
  நீட்சி: மொழிபெயர்ப்பு_அகராதி_வகை;
  பெயர்: மொழிபெயர்ப்பு_அகராதி_வகை;
  பதிப்புகள்: { [பதிப்பு: string]: string[] };

  விதிகள்: {
    [விதி: string]: {
      பெயர்ப்பு: மொழிபெயர்ப்பு_அகராதி_வகை;
      தேவை?: boolean;
    };
  };
  மொழிபெயர்ப்பாளர்கள்: string[];
};
