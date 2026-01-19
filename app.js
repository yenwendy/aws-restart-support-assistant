// Support request categories with their fields
const categories = [
    {
        id: 1,
        title: "AWS re/Start Post Graduate Resources Inquiry",
        description: "Learner has graduated and has not received invitation to post graduate resources. This contact will be from a Learner and/or a CO (MPOC or Instructor or other)",
        fields: [
            { name: "organization", label: "Name of Collaborating Organization", type: "text", required: true },
            { name: "cohortId", label: "Cohort ID", type: "text", required: true },
            { name: "cohortEndDate", label: "Cohort End Date", type: "date", required: true },
            { name: "affectedUsers", label: "Is This Affecting a Single User(s) or the Whole Class?", type: "select", options: ["Single User(s)", "Whole Class"], required: true },
            { name: "numberOfLearners", label: "Number of Learners Affected?", type: "number", required: true, min: 1, dynamic: true },
            { name: "additionalInfo", label: "Additional Information", type: "textarea", required: false }
        ]
    },
    {
        id: 2,
        title: "Marketing Question",
        description: "Any inquiry regarding messaging, marketing, PR, websites",
        fields: [
            { name: "organization", label: "Name of Collaborating Organization", type: "text", required: true },
            { name: "marketingContact", label: "Marketing Contact in CO (if possible)", type: "text", required: false },
            { name: "description", label: "Description of the Inquiry", type: "textarea", required: true }
        ]
    },
    {
        id: 3,
        title: "Request to Source Instructors",
        description: "COs have the option to engage AWS to source an approved instructor. Submit a request to AWS to exercise this option.",
        fields: [
            { name: "organization", label: "Name of Collaborating Organization", type: "text", required: true },
            { name: "contactName", label: "Name of Primary Contact for This Request at CO", type: "text", required: true },
            { name: "contactEmail", label: "Email Address of Primary Contact for This Request at CO", type: "email", required: true },
            { name: "consent", label: "Does the CO Consent to Have the Above Contact Info Shared with the Contracting Agency?", type: "select", options: ["Yes", "No"], required: true },
            { name: "cohortDates", label: "Start Date and End Date for the Cohort", type: "text", required: true, help: "Example: Start: 2026-03-01, End: 2026-06-30" },
            { name: "deliveryMode", label: "In-person Delivery or Remote", type: "select", options: ["In-person", "Remote"], required: true },
            { name: "locationRequirement", label: "Is There a Location Requirement for the Instructor (Both in the Case of In-person or Remote)", type: "text", required: false },
            { name: "languageRequirements", label: "Language Requirements for the Instructor", type: "text", required: false },
            { name: "description", label: "Description of the Request", type: "textarea", required: true }
        ]
    },
    {
        id: 4,
        title: "Digital Badge Issue",
        description: "MPOC/Instructor in CO reaches out indicating that a learner or instructor has not received digital badge",
        fields: [
            { name: "personName", label: "Name of Person Who Should Have Received Badge", type: "text", required: true },
            { name: "personEmail", label: "Email of Person Who Should Have Received Badge", type: "email", required: true },
            { name: "cohortId", label: "Cohort ID (if applicable)", type: "text", required: false },
            { name: "role", label: "Role of Person Who Should Have Received Badge", type: "select", options: ["Learner", "Instructor"], required: true }
        ]
    },
    {
        id: 5,
        title: "Instructor Approval-Related Inquiries",
        description: "Any queries from instructors, which are not covered in other SOPs (including instructor approval-related inquiries)",
        fields: [
            { name: "organization", label: "Name of Collaborating Organization", type: "text", required: true },
            { name: "instructorName", label: "Name of Instructor", type: "text", required: true },
            { name: "instructorEmail", label: "Email Address of Instructor", type: "email", required: true },
            { name: "cohortId", label: "Cohort ID (if applicable)", type: "text", required: false },
            { name: "description", label: "Description of the Inquiry", type: "textarea", required: true }
        ]
    },
    {
        id: 6,
        title: "Add Course Coordinator, Professional Skills Instructor, or Approved Instructor to an Existing Class in Canvas",
        description: "Request from MPOC, Instructor, or another other authorized contact in CO",
        fields: [
            { name: "organization", label: "Name of Collaborating Organization", type: "text", required: true },
            { name: "cohortId", label: "Cohort ID", type: "text", required: true },
            { name: "userRole", label: "Role of User Being Added to the Existing Class in Canvas (TYPE ONE: COURSE COORDINATOR, PROFESSIONAL SKILLS INSTRUCTOR, INSTRUCTOR)", type: "select", options: ["Course Coordinator", "Professional Skills Instructor", "Instructor"], required: true },
            { name: "reason", label: "Reason as to Why They Need to Be Added in the Existing Class in Canvas", type: "textarea", required: true }
        ]
    },
    {
        id: 7,
        title: "Content Feedback",
        description: "Provide feedback on curriculum content",
        fields: [
            { name: "organization", label: "Name of Collaborating Organization", type: "text", required: true },
            { name: "cohortId", label: "Cohort ID", type: "text", required: true },
            { name: "feedback", label: "Feedback Description", type: "textarea", required: true }
        ]
    },
    {
        id: 8,
        title: "Broken Canvas Link",
        description: "Report a broken link in Canvas",
        fields: [
            { name: "organization", label: "Name of Collaborating Organization", type: "text", required: true },
            { name: "cohortId", label: "Cohort ID", type: "text", required: true },
            { name: "affectedUsers", label: "Is This Affecting a Single User(s) or the Whole Class?", type: "select", options: ["Single User(s)", "Whole Class"], required: true },
            { name: "userDetails", label: "In Case of Single User - Provide the User Details (ie: name, email address)", type: "text", required: false },
            { name: "lessonTitle", label: "Lesson Title", type: "text", required: true },
            { name: "issueDescription", label: "Description of the Issue", type: "textarea", required: true }
        ]
    },
    {
        id: 9,
        title: "Lab Issue",
        description: "Report an issue with a lab",
        fields: [
            { name: "organization", label: "Name of Collaborating Organization", type: "text", required: true },
            { name: "cohortId", label: "Cohort ID", type: "text", required: true },
            { name: "affectedUsers", label: "Is This Affecting a Single User(s) or the Whole Class?", type: "select", options: ["Single User(s)", "Whole Class"], required: true },
            { name: "userDetails", label: "In Case of Single User Collect User Details (ie: name, email address)", type: "text", required: false },
            { name: "labNumber", label: "Lab Number or the Lab Name", type: "text", required: true },
            { name: "issueDescription", label: "Description of the Issue", type: "textarea", required: true }
        ]
    },
    {
        id: 10,
        title: "Other Technical Support Requests",
        description: "For example, knowledge check issues, broken links",
        fields: [
            { name: "organization", label: "Name of Collaborating Organization", type: "text", required: true },
            { name: "cohortId", label: "Cohort ID", type: "text", required: true },
            { name: "affectedUsers", label: "Is This Affecting a Single User(s) or the Whole Class?", type: "select", options: ["Single User(s)", "Whole Class"], required: true },
            { name: "userDetails", label: "In Case of Single User Collect User Details", type: "text", required: false },
            { name: "labNumber", label: "Lab Number and Name / Knowledge Check Name / Lesson Title", type: "text", required: false },
            { name: "issueDescription", label: "Description of the Issue", type: "textarea", required: true }
        ]
    },
    {
        id: 11,
        title: "Request to Extend Class Duration",
        description: "Request an extension for class duration",
        fields: [
            { name: "organization", label: "Name of Collaborating Organization", type: "text", required: true },
            { name: "cohortId", label: "Cohort ID", type: "text", required: true },
            { name: "extensionDate", label: "Date to When the Class Will Be Extended", type: "date", required: true },
            { name: "reason", label: "Reason for Extension", type: "textarea", required: true }
        ]
    },
    {
        id: 12,
        title: "Request to Delay Class Start Date",
        description: "Request to delay the start date of a class",
        fields: [
            { name: "organization", label: "Name of Collaborating Organization", type: "text", required: true },
            { name: "cohortId", label: "Cohort ID", type: "text", required: true },
            { name: "delayDate", label: "Date to When the Class Will Be Delayed", type: "date", required: true },
            { name: "reason", label: "Reason for Delay", type: "textarea", required: true }
        ]
    },
    {
        id: 13,
        title: "Other Canvas-Related Issues",
        description: "Report other Canvas-related issues",
        fields: [
            { name: "organization", label: "Name of Collaborating Organization", type: "text", required: true },
            { name: "cohortId", label: "Cohort ID", type: "text", required: true },
            { name: "affectedUsers", label: "Is This Affecting a Single User(s) or the Whole Class?", type: "select", options: ["Single User(s)", "Whole Class"], required: true },
            { name: "userDetails", label: "In Case of Single User Collect User Details (ie: Name, Email Address)", type: "text", required: false },
            { name: "labNumber", label: "Lab Number and Name / Knowledge Check Name / Lesson Title (if applicable)", type: "text", required: false },
            { name: "issueDescription", label: "Description of the Issue", type: "textarea", required: true }
        ]
    },
    {
        id: 14,
        title: "Request for Metrics/Data Correction",
        description: "Including reporting of certification exams taken and passed",
        fields: [
            { name: "organization", label: "Name of Collaborating Organization", type: "text", required: true },
            { name: "cohortId", label: "Cohort ID", type: "text", required: true },
            { name: "correctionDescription", label: "Description of the Correction Needed (Please Provide Metrics/Data Individually, with Each Cohort Listed)", type: "textarea", required: true }
        ]
    },
    {
        id: 15,
        title: "Request Exam Vouchers",
        description: "Request exam vouchers for learners",
        fields: [
            { name: "requesterEmail", label: "Email Address of Person Making This Request", type: "email", required: true },
            { name: "distributorName", label: "Name of Person Distributing Voucher Codes to Learners", type: "text", required: true },
            { name: "distributorEmail", label: "Email Address of Person Distributing Voucher Codes to Learners", type: "email", required: true },
            { name: "organization", label: "Name of Collaborating Organization", type: "text", required: true },
            { name: "numberOfCohorts", label: "How Many Cohorts Is This Request For?", type: "number", required: true, min: 1, dynamic: true },
            { name: "examType", label: "AWS re/Start Foundation or Associate", type: "select", options: ["Foundation", "Associate"], required: true },
            { name: "dateNeeded", label: "Date Needed (Must Be at Least One Week from Date Request Is Made)", type: "date", required: true }
        ]
    },
    {
        id: 16,
        title: "Access to Sample Curriculum",
        description: "Request access to sample curriculum",
        fields: [
            { name: "organization", label: "Name of Collaborating Organization", type: "text", required: true },
            { name: "personNames", label: "First and Last Name of Person (or People) Requiring Access to Sample Curriculum", type: "textarea", required: true, help: "List multiple names if needed, one per line" },
            { name: "personEmails", label: "Email Address(es) of the Persons Requiring Access to the Sample Curriculum", type: "textarea", required: true, help: "List multiple emails if needed, one per line" },
            { name: "reason", label: "Reason They Are Requiring Access to the Sample Curriculum", type: "textarea", required: true }
        ]
    }
];

let currentCategory = null;
let formData = {};

// Initialize app
function init() {
    renderCategories();
}

// Render category cards
function renderCategories() {
    const grid = document.getElementById('categoryGrid');
    grid.innerHTML = categories.map(cat => `
        <div class="category-card" onclick="selectCategory(${cat.id})">
            <div class="category-number">${cat.id}</div>
            <div class="category-title">${cat.title}</div>
            <div class="category-desc">${cat.description}</div>
        </div>
    `).join('');
}

// Select a category
function selectCategory(id) {
    currentCategory = categories.find(c => c.id === id);
    formData = {};
    
    document.getElementById('selectedCategory').textContent = `${currentCategory.id}. ${currentCategory.title}`;
    document.getElementById('categoryDescription').textContent = currentCategory.description;
    
    renderForm();
    showStep(2);
}

// Render form fields
function renderForm() {
    const container = document.getElementById('formFields');
    
    container.innerHTML = currentCategory.fields.map(field => {
        const requiredMark = field.required ? '<span class="required">*</span>' : '';
        const helpText = field.help ? `<div class="help-text">${field.help}</div>` : '';
        
        let inputHTML = '';
        
        if (field.type === 'textarea') {
            inputHTML = `<textarea id="${field.name}" name="${field.name}" ${field.required ? 'required' : ''}></textarea>`;
        } else if (field.type === 'select') {
            inputHTML = `
                <select id="${field.name}" name="${field.name}" ${field.required ? 'required' : ''}>
                    <option value="">-- Select --</option>
                    ${field.options.map(opt => `<option value="${opt}">${opt}</option>`).join('')}
                </select>
            `;
        } else if (field.type === 'file') {
            inputHTML = `<input type="text" id="${field.name}" name="${field.name}" placeholder="You'll attach files in the support form" readonly>`;
        } else if (field.type === 'number' && field.dynamic) {
            // Dynamic field that triggers additional fields
            inputHTML = `<input type="${field.type}" id="${field.name}" name="${field.name}" min="${field.min || 1}" ${field.required ? 'required' : ''} onchange="handleDynamicField('${field.name}')">`;
        } else {
            inputHTML = `<input type="${field.type}" id="${field.name}" name="${field.name}" ${field.required ? 'required' : ''}>`;
        }
        
        return `
            <div class="form-group">
                <label for="${field.name}">${field.label} ${requiredMark}</label>
                ${inputHTML}
                ${helpText}
            </div>
        `;
    }).join('');
    
    // Add container for dynamic cohort fields (for category 15)
    if (currentCategory.id === 15) {
        container.innerHTML += `<div id="dynamicCohortFields"></div>`;
    }
    
    // Add container for dynamic learner fields (for category 1)
    if (currentCategory.id === 1) {
        container.innerHTML += `<div id="dynamicLearnerFields"></div>`;
    }
    
    container.innerHTML += `
        <div class="form-actions">
            <button type="button" class="btn-primary" onclick="reviewRequest()">Review Request →</button>
            <button type="button" class="btn-secondary" onclick="goBack()">Cancel</button>
        </div>
    `;
}

// Review request
function reviewRequest() {
    // Validate form
    const form = document.getElementById('supportForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }
    
    // Collect form data
    formData = {}; // Reset formData
    currentCategory.fields.forEach(field => {
        const element = document.getElementById(field.name);
        if (element) {
            formData[field.name] = element.value;
        }
    });
    
    // Collect dynamic cohort data for category 15
    if (currentCategory.id === 15) {
        const numberOfCohorts = parseInt(formData.numberOfCohorts);
        formData.cohorts = [];
        for (let i = 1; i <= numberOfCohorts; i++) {
            const cohortId = document.getElementById(`cohortId_${i}`)?.value;
            const voucherCount = document.getElementById(`voucherCount_${i}`)?.value;
            if (cohortId && voucherCount) {
                formData.cohorts.push({
                    cohortId: cohortId,
                    voucherCount: voucherCount
                });
            }
        }
    }
    
    // Collect dynamic learner data for category 1
    if (currentCategory.id === 1) {
        const numberOfLearners = parseInt(formData.numberOfLearners);
        formData.learners = [];
        for (let i = 1; i <= numberOfLearners; i++) {
            const learnerName = document.getElementById(`learnerName_${i}`)?.value;
            const learnerEmail = document.getElementById(`learnerEmail_${i}`)?.value;
            if (learnerName && learnerEmail) {
                formData.learners.push({
                    name: learnerName,
                    email: learnerEmail
                });
            }
        }
    }
    
    // Generate formatted output
    const formatted = formatRequest();
    document.getElementById('formattedOutput').textContent = formatted;
    
    showStep(3);
}

// Handle dynamic field changes (for exam vouchers and learners)
function handleDynamicField(fieldName) {
    // Handle Category 15: Exam Vouchers - Multiple Cohorts
    if (fieldName === 'numberOfCohorts' && currentCategory.id === 15) {
        const numberOfCohorts = parseInt(document.getElementById('numberOfCohorts').value);
        const container = document.getElementById('dynamicCohortFields');
        
        if (!numberOfCohorts || numberOfCohorts < 1) {
            container.innerHTML = '';
            return;
        }
        
        let html = '<div class="cohort-fields-section">';
        html += '<h3 style="margin-top: 20px; margin-bottom: 15px; color: var(--aws-dark);">Cohort Details</h3>';
        
        for (let i = 1; i <= numberOfCohorts; i++) {
            html += `
                <div class="cohort-group" style="background: var(--aws-light-gray); padding: 15px; border-radius: var(--border-radius); margin-bottom: 15px;">
                    <h4 style="color: var(--aws-dark); margin-bottom: 10px;">Cohort ${i}</h4>
                    <div class="form-group">
                        <label for="cohortId_${i}">Cohort ID <span class="required">*</span></label>
                        <input type="text" id="cohortId_${i}" name="cohortId_${i}" required>
                    </div>
                    <div class="form-group">
                        <label for="voucherCount_${i}">Number of Exam Vouchers Required <span class="required">*</span></label>
                        <input type="number" id="voucherCount_${i}" name="voucherCount_${i}" min="1" required>
                    </div>
                </div>
            `;
        }
        
        html += '</div>';
        container.innerHTML = html;
    }
    
    // Handle Category 1: Post Graduate Resources - Multiple Learners
    if (fieldName === 'numberOfLearners' && currentCategory.id === 1) {
        const numberOfLearners = parseInt(document.getElementById('numberOfLearners').value);
        const container = document.getElementById('dynamicLearnerFields');
        
        if (!numberOfLearners || numberOfLearners < 1) {
            container.innerHTML = '';
            return;
        }
        
        let html = '<div class="learner-fields-section">';
        html += '<h3 style="margin-top: 20px; margin-bottom: 15px; color: var(--aws-dark);">Learner Details</h3>';
        
        for (let i = 1; i <= numberOfLearners; i++) {
            html += `
                <div class="learner-group" style="background: var(--aws-light-gray); padding: 15px; border-radius: var(--border-radius); margin-bottom: 15px;">
                    <h4 style="color: var(--aws-dark); margin-bottom: 10px;">Learner ${i}</h4>
                    <div class="form-group">
                        <label for="learnerName_${i}">Name of the Learner <span class="required">*</span></label>
                        <input type="text" id="learnerName_${i}" name="learnerName_${i}" required>
                    </div>
                    <div class="form-group">
                        <label for="learnerEmail_${i}">Email Address of the Learner <span class="required">*</span></label>
                        <input type="email" id="learnerEmail_${i}" name="learnerEmail_${i}" required>
                    </div>
                </div>
            `;
        }
        
        html += '</div>';
        container.innerHTML = html;
    }
}
                <div class="cohort-group" style="background: var(--aws-light-gray); padding: 15px; border-radius: var(--border-radius); margin-bottom: 15px;">
                    <h4 style="color: var(--aws-dark); margin-bottom: 10px;">Cohort ${i}</h4>
                    <div class="form-group">
                        <label for="cohortId_${i}">Cohort ID <span class="required">*</span></label>
                        <input type="text" id="cohortId_${i}" name="cohortId_${i}" required>
                    </div>
                    <div class="form-group">
                        <label for="voucherCount_${i}">Number of Exam Vouchers Required <span class="required">*</span></label>
                        <input type="number" id="voucherCount_${i}" name="voucherCount_${i}" min="1" required>
                    </div>
                </div>
            `;
        }
        
        html += '</div>';
        container.innerHTML = html;
    }
}

// Format request for submission
function formatRequest() {
    let output = `Query: ${currentCategory.title}\n\n`;
    output += `Details: ${currentCategory.description}\n\n`;
    output += `Provided Information:\n\n`;
    
    currentCategory.fields.forEach(field => {
        const value = formData[field.name];
        if (value && field.type !== 'file' && !field.dynamic) {
            output += `${field.label}:\n${value}\n\n`;
        }
    });
    
    // Handle dynamic cohort data for category 15
    if (currentCategory.id === 15 && formData.cohorts && formData.cohorts.length > 0) {
        output += `Number of Cohorts:\n${formData.cohorts.length}\n\n`;
        formData.cohorts.forEach((cohort, index) => {
            output += `Cohort ${index + 1}:\n`;
            output += `  Cohort ID: ${cohort.cohortId}\n`;
            output += `  Number of Exam Vouchers Required: ${cohort.voucherCount}\n\n`;
        });
    }
    
    // Handle dynamic learner data for category 1
    if (currentCategory.id === 1 && formData.learners && formData.learners.length > 0) {
        output += `Number of Learners Affected:\n${formData.learners.length}\n\n`;
        formData.learners.forEach((learner, index) => {
            output += `Learner ${index + 1}:\n`;
            output += `  Name: ${learner.name}\n`;
            output += `  Email: ${learner.email}\n\n`;
        });
    }
    
    return output;
}

// Copy and submit
async function copyAndSubmit() {
    const formatted = formatRequest();
    
    try {
        await navigator.clipboard.writeText(formatted);
        
        // Open AWS support form
        window.open('https://support.aws.amazon.com/#/contacts/aws-restart', '_blank');
        
        showStep(4);
    } catch (err) {
        alert('Failed to copy to clipboard. Please copy the text manually.');
        console.error('Copy failed:', err);
    }
}

// Navigation functions
function showStep(stepNumber) {
    document.querySelectorAll('.step').forEach(step => step.classList.remove('active'));
    document.getElementById(`step${stepNumber}`).classList.add('active');
    window.scrollTo(0, 0);
}

function goBack() {
    showStep(1);
}

function editForm() {
    // Restore form values
    currentCategory.fields.forEach(field => {
        const element = document.getElementById(field.name);
        if (element && formData[field.name]) {
            element.value = formData[field.name];
        }
    });
    showStep(2);
}

function startOver() {
    currentCategory = null;
    formData = {};
    showStep(1);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', init);
