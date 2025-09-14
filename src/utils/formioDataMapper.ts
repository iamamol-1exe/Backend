export interface FormioData {
  [key: string]: any;
}

export interface ParsedData {
  [key: string]: any;
}

function mapValuesToForm(
  formData: FormioData,
  parsedData: ParsedData
): FormioData {
  for (const key in parsedData) {
    if (parsedData.hasOwnProperty(key)) {
      if (typeof parsedData[key] === "object" && parsedData[key] !== null) {
        if (typeof formData[key] !== "object" || formData[key] === null) {
          formData[key] = {};
        }
        formData[key] = mapValuesToForm(formData[key], parsedData[key]);
      } else {
        formData[key] = parsedData[key];
      }
    }
  }
  return formData;
}

export { mapValuesToForm };
