import "./bar.scss";
const Bar = () => {
  return (
    <section class="bar-graph bar-graph-horizontal bar-graph-one">
      <div class="bar-one">
        <span class="year">2019</span>
        <div class="bar" data-percentage="69.6%"></div>
      </div>
      <div class="bar-two">
        <span class="year">2018</span>
        <div class="bar" data-percentage="71%"></div>
      </div>
      <div class="bar-three">
        <span class="year">2017</span>
        <div class="bar" data-percentage="74.7%"></div>
      </div>
      <div class="bar-four">
        <span class="year">2019</span>
        <div class="bar" data-percentage="76.8%"></div>
      </div>
    </section>
  );
};

export default Bar;
