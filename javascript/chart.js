// Bar Chart: Applications per Internship
const barCtx = document.getElementById('barChart').getContext('2d');
new Chart(barCtx, {
    type: 'bar',
    data: {
        labels: ['Software Intern', 'Marketing Intern', 'Data Analyst', 'HR Intern', 'Business Analyst'],
        datasets: [{
            label: 'Number of Applications',
            data: [45, 30, 60, 25, 55],
            borderWidth: 1,
            backgroundColor: [
                '#4CAF50',
                '#2196F3',
                'rgba(245, 40, 145, 0.8)',
                '#FF5722',
                '#9C27B0'
            ]
        }]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Applications Per Internship Role'
            },
            legend: {
                labels: {
                    usePointStyle: true,
                    pointStyle: 'line'  // or use 'false' to remove completely
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }

});
// dounut chart
// Doughnut Chart: Internship Mode Breakdown
const modeCtx = document.getElementById('modeChart').getContext('2d');
new Chart(modeCtx, {
    type: 'doughnut',
    data: {
        labels: ['Remote', 'On-site', 'Hybrid'],
        datasets: [{
            data: [40, 30, 20],
            backgroundColor: ['#4caf50', '#2196f3', '#ff9800'],
            borderColor: '#fff',
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Internship Mode Distribution'
            },
            legend: {
                position: 'top'
            }
        }
    }
});

// Pie Chart: Application Status Distribution
const statusCtx = document.getElementById('appStatusChart').getContext('2d');
new Chart(statusCtx, {
    type: 'pie',
    data: {
        labels: ['Applied', 'Interviewing', 'Offer Received', 'Rejected'],
        datasets: [{
            data: [5, 3, 2, 4],
            backgroundColor: [
                '#42A5F5',  // blue for Applied
                '#FFA726',  // orange for Interviewing
                '#66BB6A',  // green for Offer Received
                '#EF5350'   // red for Rejected
            ],
            borderColor: '#fff',
            borderWidth: 2,
            hoverOffset: 10
        }]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Application Pipeline Status'
            },
            legend: {
                position: 'top',
                labels: {
                    boxWidth: 20,
                    font: {
                        size: 12
                    }
                }
            },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        const label = context.label || '';
                        const value = context.raw;
                        return `${label}: ${value} application${value > 1 ? 's' : ''}`;
                    }
                }
            }
        }
    }
});

// Line Chart: Monthly Internship Applications
const lineCtx = document.getElementById('lineChart').getContext('2d');
new Chart(lineCtx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Applications',
            data: [5, 10, 25, 40, 35, 20, 14, 26, 47, 35, 15, 5],
            borderColor: 'rgba(18, 6, 195, 0.96)',
            backgroundColor: 'rgba(205, 196, 251, 0.35)',
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
//scatter chart
const scatterCtx = document.getElementById('scatterChart').getContext('2d');

new Chart(scatterCtx, {
    type: 'scatter',
    data: {
        datasets: [
            {
                label: 'IT',
                data: [
                    { x: 8, y: 1200 },
                    { x: 6, y: 1000 },
                    { x: 4, y: 800 }
                ],
                backgroundColor: '#42a5f5'
            },
            {
                label: 'Marketing',
                data: [
                    { x: 6, y: 600 },
                    { x: 4, y: 500 },
                    { x: 8, y: 700 }
                ],
                backgroundColor: '#ef5350'
            },
            {
                label: 'Finance',
                data: [
                    { x: 8, y: 1500 },
                    { x: 10, y: 1800 },
                    { x: 6, y: 1100 }
                ],
                backgroundColor: '#66bb6a'
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Stipend vs Internship Duration by Field',
                font: {
                    size: 16,
                    weight: 'bold'
                }
            },
            legend: {
                display: true,
                position: 'bottom',
                labels: {
                    boxWidth: 12,
                    padding: 15,
                    font: {
                        size: 12,
                        weight: 'bold'
                    }
                }
            },
            tooltip: {
                backgroundColor: '#333',
                titleColor: '#fff',
                bodyColor: '#fff',
                padding: 10,
                callbacks: {
                    title: () => '',
                    label: context =>
                        `${context.dataset.label} Internship → ${context.raw.x} Months | $${context.raw.y}`
                }
            }
        }
        ,
        scales: {
            x: {
                type: 'linear',
                title: {
                    display: true,
                    text: 'Internship Duration (Months)'
                },
                beginAtZero: true,
                suggestedMax: 12
            },
            y: {
                title: {
                    display: true,
                    text: 'Monthly Stipend ($)'
                },
                beginAtZero: true,
                suggestedMax: 2000
            }
        }
    }
});
