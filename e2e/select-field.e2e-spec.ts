import {
  by,
  element
} from 'protractor';

import {
  expect,
  SkyHostBrowser
} from '@skyux-sdk/e2e';

describe('Select field', () => {
  beforeEach(() => {
    SkyHostBrowser.get('visual/select-field');
  });

  it('should match previous multiple mode screenshot', (done) => {
    SkyHostBrowser.setWindowBreakpoint('lg');
    expect('#screenshot-select-field-multiple-mode').toMatchBaselineScreenshot(done);
  });

  it('should match previous single mode screenshot', (done) => {
    SkyHostBrowser.setWindowBreakpoint('lg');
    expect('#screenshot-select-field-single-mode').toMatchBaselineScreenshot(done);
  });

  it('should match previous single mode screenshot with validation', (done) => {
    SkyHostBrowser.setWindowBreakpoint('lg');
    element(by.css('#screenshot-select-field-single-mode .sky-input-group.sky-btn')).click();
    element(by.css('.sky-modal-btn-close')).click();
    SkyHostBrowser.moveCursorOffScreen();
    expect('#screenshot-select-field-single-mode-wrapper').toMatchBaselineScreenshot(done, {
      screenshotName: 'select-field-single-mode-validation'
    });
  });

  it('should match previous multiple mode selected screenshot', (done) => {
    SkyHostBrowser.setWindowBreakpoint('lg');
    element(by.css('#select-field-populate-selected-btn')).click();
    expect('#screenshot-select-field-multiple-mode').toMatchBaselineScreenshot(done);
  });

  it('should match previous single mode selected screenshot', (done) => {
    SkyHostBrowser.setWindowBreakpoint('lg');
    element(by.css('#select-field-populate-selected-btn')).click();
    expect('#screenshot-select-field-single-mode').toMatchBaselineScreenshot(done);
  });

  it('should match previous multiple mode selected screenshot with a long label', (done) => {
    SkyHostBrowser.setWindowBreakpoint('md');
    element(by.css('#select-field-populate-selected-long-btn')).click();
    expect('#screenshot-select-field-multiple-mode').toMatchBaselineScreenshot(done);
  });

  it('should match previous single mode selected screenshot with a long label', (done) => {
    SkyHostBrowser.setWindowBreakpoint('md');
    element(by.css('#select-field-populate-selected-long-btn')).click();
    expect('#screenshot-select-field-single-mode').toMatchBaselineScreenshot(done);
  });

  it('should match previous single mode picker screenshot', (done) => {
    SkyHostBrowser.setWindowBreakpoint('lg');
    element(by.css('#screenshot-select-field-single-mode .sky-input-group.sky-btn')).click();

    SkyHostBrowser.moveCursorOffScreen();

    expect('.sky-modal').toMatchBaselineScreenshot(() => {
      element(by.css('.sky-modal-btn-close')).click();
      done();
    });
  });

  it('should match previous multiple mode picker screenshot', (done) => {
    SkyHostBrowser.setWindowBreakpoint('lg');
    element(by.css('#screenshot-select-field-multiple-mode .sky-btn.sky-btn-default')).click();

    SkyHostBrowser.moveCursorOffScreen();

    expect('.sky-modal').toMatchBaselineScreenshot(() => {
      element(by.css('.sky-modal-btn-close')).click();
      done();
    });
  });
});
