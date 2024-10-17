        document.getElementById('moreInfoBtn').addEventListener('click', function() {
            const moreText = document.querySelector('.more-text');
            const allDetails = document.querySelector('.all-details');
            if (moreText.style.display === 'none' || moreText.style.display === '') {
                moreText.style.display = 'block'; 
                allDetails.style.display = 'block'; 
                this.innerText = 'Moins d\'informations'; 
            } else {
                moreText.style.display = 'none'; 
                allDetails.style.display = 'none'; 
                this.innerText = 'Plus d\'informations'; 
            }
        });
