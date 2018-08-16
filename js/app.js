var portfolioApp = angular.module('portfolioApp', []);

portfolioApp.controller('SkillsController', function($scope) {
    $scope.skillTypes = [
        {id : 'front-end-dev', name : 'Front-end Development'},
        {id : 'back-end-development', name : 'Back-end Development'},
        {id : 'database-management', name : 'Database Mangement'},
        {id : 'ui-ux-design', name : 'UI/UX Design'},
        {id : 'project-management', name : 'Project Management'}
    ];

    $scope.skills = [
        {name : 'HTML', type : 'front-end-dev', percent : 95},
        {name : 'JavaScript', type : 'front-end-dev', percent : 90},
        {name : 'CSS', type : 'front-end-dev', percent : 80},
        {name : 'Angular', type : 'front-end-dev', percent : 80},
        {name : 'Bootstrap', type : 'front-end-dev', percent : 75},
        {name : 'SASS', type : 'front-end-dev', percent : 75},
        {name : 'Java', type : 'back-end-development', percent : 80},
        {name : 'ServiceNow', type : 'back-end-development', percent : 80},
        {name : 'C#', type : 'back-end-development', percent : 75},
        { name : 'PHP', type : 'back-end-development', percent : 75},
        {name : 'Linux', type : 'back-end-development', percent : 75},
        {name : 'TypeScript', type : 'back-end-development', percent : 55},
        {name : 'SQL', type : 'database-management', percent : 95},
        { name : 'MySQL', type : 'database-management', percent : 80},
        { name : 'SQL Server', type : 'database-management', percent : 80},
        {name : 'DB Mapping', type : 'database-management', percent : 80},
        {name : 'Adobe XD', type : 'ui-ux-design', percent : 80},
        {name : 'Design Flow Process', type : 'ui-ux-design', percent : 75},
        {name : 'Photoshop', type : 'ui-ux-design', percent : 60},
        {name : 'Wireframe', type : 'ui-ux-design', percent : 50},
        { name : 'Quality Assurance', type : 'project-management', percent : 95},
        { name : 'Project Planning', type : 'project-management', percent : 80},
        {name : 'Resource Mgmt', type : 'project-management', percent : 65}
    ];

   
    

});


portfolioApp.controller('ExperienceController', function($scope) {
    $scope.experiences = [
        {
            id: 'accenture', 
            name: 'Accenture Federal Services', 
            role: "Senior Technology Analyst",
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quia corrupti quo, voluptates sed odit consequuntur totam sunt magni! Provident quaerat eum omnis! Aliquam saepe pariatur nam voluptates. Distinctio inventore praesentium officia neque a obcaecati sint iusto blanditiis sequi minima, amet sunt libero ex porro excepturi odio minus saepe dolore?'
        },
        {
            id: 'synovus', 
            name: 'Synovus Financial Corp', 
            role: "Business Analyst",
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quia corrupti quo, voluptates sed odit consequuntur totam sunt magni! Provident quaerat eum omnis! Aliquam saepe pariatur nam voluptates. Distinctio inventore praesentium officia neque a obcaecati sint iusto blanditiis sequi minima, amet sunt libero ex porro excepturi odio minus saepe dolore?'
        }
    ];
});