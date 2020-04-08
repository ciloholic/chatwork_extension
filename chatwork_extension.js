export default () => {
  const buttons = [
    { id: '_custom_button_0', label: '[朝]', text: "\nおはようございます。\n業務開始致します。" },
    { id: '_custom_button_1', label: '[昼始]', text: "\n休憩に入ります。" },
    { id: '_custom_button_2', label: '[昼終]', text: "\n業務を再開します。" },
    { id: '_custom_button_3', label: '[夕]', text: "\n本日の業務終了致します。\nお疲れさまでした。" }
  ];
  const template = `<li id="__ID__" class="_showDescription chatInput__block"><span>__LABEL__</span></li>`;
  setInterval(add_custom_button, 1000);
  function add_custom_button() {
    if (document.getElementById(buttons[0]['id']) != null) return
    const $tool = document.getElementById('_chatSendTool');
    const $chat = document.getElementById('_chatText');
    buttons.forEach(button => {
      $tool.insertAdjacentHTML('beforeend', template.replace('__ID__', button['id']).replace('__LABEL__', button['label']))
      const $button = document.getElementById(button['id']);
      $button.onclick = () => {
        $chat.value = button['text'];
        $chat.style.overflowY = 'scroll';
        $chat.style.height = '115px';
      }
    });
  }
};
