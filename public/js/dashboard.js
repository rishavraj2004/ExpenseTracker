// public/js/dashboard.js — ExpenseTrack Dashboard

let activeChart = null;

function buildChart(period) {
  const data = chartData[period];
  const ctx  = document.getElementById('spendChart');
  if (!ctx) return;

  if (activeChart) {
    activeChart.destroy();
    activeChart = null;
  }

  activeChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: data.labels,
      datasets: [
        {
          label: 'Income',
          data: data.income,
          backgroundColor: '#2563eb',
          borderRadius: 6,
          borderSkipped: false,
          barPercentage: 0.55,
          categoryPercentage: 0.7
        },
        {
          label: 'Expenses',
          data: data.expenses,
          backgroundColor: '#93c5fd',
          borderRadius: 6,
          borderSkipped: false,
          barPercentage: 0.55,
          categoryPercentage: 0.7
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: function(ctx) {
              return ctx.dataset.label + ': ₹' + ctx.parsed.y.toLocaleString('en-IN');
            }
          }
        }
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: {
            font: { size: 12, family: 'DM Sans' },
            color: '#9ca3af',
            autoSkip: false,
            maxRotation: 0
          },
          border: { display: false }
        },
        y: {
          grid: { color: 'rgba(0,0,0,0.05)', drawBorder: false },
          ticks: {
            font: { size: 11, family: 'DM Sans' },
            color: '#9ca3af',
            callback: function(v) {
              return '₹' + (v / 1000).toFixed(0) + 'k';
            }
          },
          border: { display: false }
        }
      }
    }
  });
}

// Period tab switching
document.querySelectorAll('.ptab').forEach(function(btn) {
  btn.addEventListener('click', function() {
    document.querySelectorAll('.ptab').forEach(function(b) {
      b.classList.remove('active');
    });
    this.classList.add('active');
    buildChart(this.dataset.period);
  });
});

// Set today's date on the date input
var dateInput = document.getElementById('date');
if (dateInput) {
  var today = new Date().toISOString().split('T')[0];
  dateInput.value = today;
}

// Init with 6m
buildChart('6m');
