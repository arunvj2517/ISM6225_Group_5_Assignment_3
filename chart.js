// Bar Chart: Applications per Internship
const barCtx = document.getElementById('barChart').getContext('2d');
new Chart(barCtx, {
    type: 'bar',
    data: {
        labels: ['Software Intern', 'Marketing Intern', 'Data Analyst', 'HR Intern'],
        datasets: [{
            label: '# of Applications',
            data: [45, 30, 60, 25],
            borderWidth: 1,
            backgroundColor: 'rgba(54, 162, 235, 0.6)'
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { display: true },
            title: { display: true, text: 'Applications Per Internship Role' }
        }
    }
});

// Pie Chart: Application Status Distribution
const pieCtx = document.getElementById('pieChart').getContext('2d');
new Chart(pieCtx, {
    type: 'pie',
    data: {
        labels: ['Accepted', 'Pending', 'Rejected'],
        datasets: [{
            data: [20, 40, 40],
            backgroundColor: ['#4caf50', '#ff9800', '#f44336']
        }]
    },
    options: {
        responsive: true,
        plugins: {
            title: { display: true, text: 'Application Status Distribution' }
        }
    }
});

// Line Chart: Monthly Internship Applications
const lineCtx = document.getElementById('lineChart').getContext('2d');
new Chart(lineCtx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Applications',
            data: [5, 10, 25, 40, 35, 20],
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            fill: true,
            tension: 0.4
        }]
    },
    options: {
        responsive: true,
        plugins: {
            title: { display: true, text: 'Monthly Internship Applications' }
        }
    }
});
