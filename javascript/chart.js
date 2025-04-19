// Initialize all charts when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Chart 1: Applications by Status (Doughnut)
    const statusCtx = document.getElementById('statusChart').getContext('2d');
    new Chart(statusCtx, {
      type: 'doughnut',
      data: {
        labels: ['Applied', 'Interview', 'Offer', 'Rejected'],
        datasets: [{
          data: [12, 5, 2, 3],
          backgroundColor: [
            '#3b82f6',
            '#f59e0b',
            '#10b981',
            '#ef4444'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom'
          }
        }
      }
    });
  
    // Chart 2: Monthly Applications (Bar)
    const timelineCtx = document.getElementById('timelineChart').getContext('2d');
    new Chart(timelineCtx, {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          label: 'Applications',
          data: [2, 3, 5, 8, 4, 6],
          backgroundColor: '#3b82f6',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  
    // Chart 3: Applications by Type (Pie)
    const typeCtx = document.getElementById('typeChart').getContext('2d');
    new Chart(typeCtx, {
      type: 'pie',
      data: {
        labels: ['Internship', 'Full-time', 'Co-op'],
        datasets: [{
          data: [15, 5, 3],
          backgroundColor: [
            '#3b82f6',
            '#10b981',
            '#f59e0b'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom'
          }
        }
      }
    });
  
    // Chart 4: Response Rate (Line)
    const responseCtx = document.getElementById('responseChart').getContext('2d');
    new Chart(responseCtx, {
      type: 'line',
      data: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [{
          label: 'Response Rate (%)',
          data: [10, 25, 40, 35],
          borderColor: '#3b82f6',
          backgroundColor: 'rgba(59, 130, 246, 0.1)',
          fill: true,
          tension: 0.3
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            max: 100
          }
        }
      }
    });
  });