document.getElementById('status').addEventListener('change', function() {
    if(this.value === 'married') {
        document.getElementById('childrenInput').style.display = 'block';
    } else {
        document.getElementById('childrenInput').style.display = 'none';
    }
});

document.getElementById('familyForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const status = document.getElementById('status').value;
    const children = document.getElementById('children').value;
    console.log('Marital Status:', status);
    if(status === 'married') {
        console.log('Number of Children:', children);
    }
})