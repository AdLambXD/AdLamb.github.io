// 当整个页面的DOM结构加载完成后，执行以下函数
document.addEventListener('DOMContentLoaded', function () {
    // 选择所有类名为'menu-list'的元素下的a标签（菜单链接）
    const menuLinks = document.querySelectorAll('.menu-list a');
    // 初始化一个变量来存储当前iframe的src地址，用于比较是否需要重新加载iframe内容
    let currentIframeSrc = '';

    // 遍历所有的菜单链接
    menuLinks.forEach(link => {
        // 给每个菜单链接添加点击事件监听器
        link.addEventListener('click', function (event) {
            // 阻止默认的锚点跳转行为
            event.preventDefault();

            // 获取当前点击的菜单链接的目标ID（去掉'#'）
            const targetId = this.getAttribute('href').slice(1);
            // 获取id为'contentFrame'的iframe元素
            const iframe = document.getElementById('contentFrame');

            // 检查目标ID与当前iframe的src地址是否不同
            if (targetId !== currentIframeSrc) {
                // 如果不同，则更新iframe的src属性，指向以目标ID命名的HTML文件
                iframe.src = `${targetId}.html`;
                // 更新当前iframe的src地址记录
                currentIframeSrc = targetId;
            }
        });
    });
});