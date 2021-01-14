import React, { useEffect } from 'react';

const ClickAndDrag = () => {
  useEffect(() => {
    const slider = document.querySelector('.items');
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener('mousedown', (e) => {
      isDown = true;
      slider.classList.add('active');
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });
    
    slider.addEventListener('mouseleave', () => {
      isDown = false;
      slider.classList.remove('active');
    });
    
    slider.addEventListener('mouseup', () => {
      isDown = false;
      slider.classList.remove('active');
    });

    slider.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 1;
      slider.scrollLeft = scrollLeft - walk;
    });

  }, []);

  return (
    <div className="content-container">
      <h1>Click and Drag to Scroll</h1>

      <div className="click-drag-container">
        <div className="items">
          <div className="itemJS27 item1">01</div>
          <div className="itemJS27 item2">02</div>
          <div className="itemJS27 item3">03</div>
          <div className="itemJS27 item4">04</div>
          <div className="itemJS27 item5">05</div>
          <div className="itemJS27 item6">06</div>
          <div className="itemJS27 item7">07</div>
          <div className="itemJS27 item8">08</div>
          <div className="itemJS27 item9">09</div>
          <div className="itemJS27 item10">10</div>
          <div className="itemJS27 item11">11</div>
          <div className="itemJS27 item12">12</div>
          <div className="itemJS27 item13">13</div>
          <div className="itemJS27 item14">14</div>
          <div className="itemJS27 item15">15</div>
          <div className="itemJS27 item16">16</div>
          <div className="itemJS27 item17">17</div>
          <div className="itemJS27 item18">18</div>
          <div className="itemJS27 item19">19</div>
          <div className="itemJS27 item20">20</div>
          <div className="itemJS27 item21">21</div>
          <div className="itemJS27 item22">22</div>
          <div className="itemJS27 item23">23</div>
          <div className="itemJS27 item24">24</div>
          <div className="itemJS27 item25">25</div>
        </div>
      </div>

    </div>
  );
};

export default ClickAndDrag;
