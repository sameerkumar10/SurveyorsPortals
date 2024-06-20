import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Survey, Model } from "survey-react";
import 'survey-core/defaultV2.css';
import jsPDF from "jspdf";
import surveyJson from "../Data/surveyData";
import localizationData from "../Data/localizationData";

const MainSurvey = () => {
  const [searchParams] = useSearchParams();
  const surveyId = searchParams.get("surveyId");
  const [language, setLanguage] = useState("en");
  const [surveyModel, setSurveyModel] = useState(new Model(surveyJson));

  const updateTitlesAndDescriptions = (pages) => {
    pages.forEach((page, pageIndex) => {
      // Update page descriptions
      const descriptionKey = `description${pageIndex + 1}`;
      if (localizationData[language][descriptionKey]) {
        page.description = localizationData[language][descriptionKey];
      }

      page.elements.forEach((element) => {
        // Update element titles
        if (element.name && localizationData[language][element.name]) {
          element.title = localizationData[language][element.name];
        }

        // Update choices for specific input types
        if (["checkbox", "radiogroup", "tagbox", "dropdown"].includes(element.type) && element.choices) {
          element.choices.forEach((choice, index) => {
            const choiceKey = `choice${element.name}_${index + 1}`;
            if (localizationData[language][choiceKey]) {
              choice.text = localizationData[language][choiceKey];
            }
          });
        }

        // Recursively update elements in a panel
        if (element.elements && element.type === "panel") {
          updateTitlesAndDescriptions([{ elements: element.elements }]);
        }
      });
    });
  };

  useEffect(() => {
    const fetchSurveyData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/forms/${surveyId}`, {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const updatedJson = JSON.parse(JSON.stringify(surveyJson)); // Clone the original JSON

        // Append fetched survey data to the existing surveyJson
        data.fields.forEach((element, index) => {
          updatedJson.pages.push({
            name: `page${updatedJson.pages.length + 1}`,
            elements: [
              {
                ...element,
                name: element.title // Use title as name
              }
            ]
          });
        });

        updateTitlesAndDescriptions(updatedJson.pages);

        const newSurveyModel = new Model(updatedJson);
        newSurveyModel.locale = language;
        setSurveyModel(newSurveyModel);
      } catch (error) {
        console.error('Error fetching survey data:', error);
      }
    };

    if (surveyId) {
      fetchSurveyData();
    }
  }, [surveyId, language]);

  useEffect(() => {
    if (surveyModel) {
      updateTitlesAndDescriptions(surveyModel.pages);
      surveyModel.locale = language;
    }
  }, [language, surveyModel]);

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const handleComplete = async (survey) => {
    const doc = new jsPDF();
    const response = survey.data;
    let y = 10; // Initial vertical position, providing a top margin
    doc.text(`Survey Responses:`, 10, y); // Title at the top
    y += 10; // Move down 10 units for the next line

    const formattedData = {};
    survey.getAllQuestions().forEach((question) => {
      const questionTitle = question.title || question.name;
      const answer = response[question.name];

      if (answer !== undefined) {
        formattedData[questionTitle] = answer;
        if (question.getType() === "file" && answer.length > 0 && answer[0].content) {
          doc.text(`${questionTitle}: (Image attached)`, 10, y);
          y += 10;
          const imageData = answer[0].content.split(',')[1]; // Ensure content is available
          const imageFormat = answer[0].name.split(".").pop().toUpperCase();
          const imageWidth = 100;
          const imageHeight = 100;
          doc.addImage(
            imageData,
            imageFormat,
            10,
            y,
            imageWidth,
            imageHeight
          );
          y += imageHeight + 10; // Move down after adding the image
        } else {
          doc.text(`${questionTitle}: ${answer}`, 10, y); // Print question and answer
          y += 10; // Move down 10 units for the next response
        }
      }
    });

    doc.save("survey-responses.pdf"); // Save the PDF with the specified name

    try {
      const response = await fetch('http://localhost:5000/api/surveys/saveSurvey', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formattedData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      console.log('Success:', await response.json());
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const onUploadFiles = (survey, options) => {
    options.callback("success", options.files.map(file => {
      return {
        file: file,
        content: file.content,
        name: file.name,
        type: file.type,
        size: file.size
      };
    }));
  };

  surveyModel.onUploadFiles.add(onUploadFiles);

  return (
    <div className="container">
      <select onChange={handleLanguageChange}>
        <option value="en">English</option>
        <option value="hi">हिन्दी</option>
        <option value="bn">বাংলা</option>
        <option value="te">తెలుగు</option>
        <option value="mr">मराठी</option>
        <option value="ta">தமிழ்</option>
        <option value="gu">ગુજરાતી</option>
        <option value="kn">ಕನ್ನಡ</option>
        <option value="ml">മലയാളം</option>
        <option value="pa">ਪੰਜਾਬੀ</option>
        <option value="or">ଓଡ଼ିଆ</option>
        <option value="as">অসমীয়া</option>
        <option value="ma">मैथिली</option>
        <option value="bh">भोजपुरी</option>
      </select>
      <Survey model={surveyModel} onComplete={handleComplete} />
    </div>
  );
};

export default MainSurvey;
