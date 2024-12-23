from flask import Flask, request, jsonify
import pandas as pd

app = Flask(__name__)

# Load the salary data from CSV
file_path = r'C:\Users\Kiran Kumar\Desktop\Ds project\data\salary_data.csv'
df = pd.read_csv(file_path)

@app.route('/')
def index():
    return app.send_static_file('index.html')

@app.route('/predict', methods=['POST'])
def predict_salary():
    data = request.get_json()

    years_of_experience = data['yearsOfExperience']
    education_level = data['educationLevel']
    job_role = data['jobRole']

    # Filter the DataFrame based on the input parameters
    filtered_data = df[(df['YearsExperience'] == years_of_experience) &
                       (df['EducationLevel'] == education_level) &
                       (df['JobRole'] == job_role)]

    # Check if there's exactly one matching row
    if len(filtered_data) == 1:
        predicted_salary = filtered_data['Salary'].values[0]
        return jsonify({'salary': predicted_salary})
    else:
        return jsonify({'error': 'No unique salary prediction found for the given inputs.'}), 400

if __name__ == '__main__':
    app.run(debug=True)
