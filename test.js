// script.js - 外部JavaScript文件

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 获取按钮元素
    const calculateBtn = document.getElementById('calculateBtn');
            const modal = document.getElementById('totalModal');
            const totalInput = document.getElementById('totalInput');
            const closeBtn = document.querySelector('.close');
            const totalAmountSpan = document.getElementById('totalAmount');
    // 设置账单日期为当前日期的3天后
        const billDate = document.getElementById('billDate');
        const targetDate = new Date();
        targetDate.setDate(targetDate.getDate() + 3);
        const year = targetDate.getFullYear();
        const month = String(targetDate.getMonth() + 1).padStart(2, '0');
        const day = String(targetDate.getDate()).padStart(2, '0');
        billDate.textContent = `账单生成日期：${year}年${month}月${day}日`;
    
    
    // 计算总计按钮点击事件
    calculateBtn.addEventListener('click', function() {
        let total = 0;
        // 获取所有金额单元格
        const amountCells = document.querySelectorAll('.amount');
        
        amountCells.forEach(cell => {
            // 提取数字并转换为整数
            const amountText = cell.textContent.replace(/[^0-9]/g, '');
            const amount = parseInt(amountText) || 0;
            total += amount; // total = total + amount
        });
        

      
        // 更新总计显示
                const formattedTotal = total.toLocaleString();
                totalAmountSpan.textContent = formattedTotal;

     // 设置弹窗中的输入框值并显示弹窗
                totalInput.value = formattedTotal + ' 元';
                modal.style.display = 'block';
            });
            
            // 关闭弹窗
            closeBtn.addEventListener('click', function() {
                modal.style.display = 'none';
            });
            
            // 点击弹窗外部关闭
            window.addEventListener('click', function(event) {
                if (event.target === modal) {
                    modal.style.display = 'none';
                }
            });
})
