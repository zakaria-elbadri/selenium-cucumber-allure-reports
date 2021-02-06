$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/header.feature");
formatter.feature({
  "line": 3,
  "name": "Header",
  "description": "As a user I should able to see header",
  "id": "header",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@header"
    },
    {
      "line": 2,
      "name": "@daily_regression"
    }
  ]
});
formatter.before({
  "duration": 1636968457,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Header",
  "description": "",
  "id": "header;header",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "user opens base lobby",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "my header is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "PredefinedStepDefinitions.navigate_to_lobby()"
});
formatter.result({
  "duration": 13547260263,
  "status": "passed"
});
formatter.match({
  "location": "HeaderTestStepDefs.enterUsername()"
});
formatter.result({
  "duration": 79168214,
  "status": "passed"
});
formatter.after({
  "duration": 652913209,
  "error_message": "java.lang.NullPointerException: Can\u0027t get item from storage: uuid can\u0027t be null\n\tat java.util.Objects.requireNonNull(Objects.java:228)\n\tat io.qameta.allure.internal.AllureStorage.get(AllureStorage.java:110)\n\tat io.qameta.allure.AllureLifecycle.prepareAttachment(AllureLifecycle.java:252)\n\tat io.qameta.allure.AllureLifecycle.addAttachment(AllureLifecycle.java:235)\n\tat io.qameta.allure.Allure.addAttachment(Allure.java:66)\n\tat com.qa.tlv.methods.BrowserUtils.attachSnapshotToReport(BrowserUtils.java:1118)\n\tat stepdefs.Hooks.afterScenario(Hooks.java:23)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:365)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeWithRerun(JUnit4Provider.java:272)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:236)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:159)\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:386)\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:323)\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:143)\n",
  "status": "failed"
});
formatter.uri("features/search.feature");
formatter.feature({
  "line": 3,
  "name": "Search",
  "description": "As a user I should able to see and use search",
  "id": "search",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@search"
    },
    {
      "line": 2,
      "name": "@daily_regression"
    }
  ]
});
formatter.before({
  "duration": 1162098,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Search",
  "description": "",
  "id": "search;search",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "user opens base lobby",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "my search is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user enters ABC in search form",
  "keyword": "And "
});
formatter.match({
  "location": "PredefinedStepDefinitions.navigate_to_lobby()"
});
formatter.result({
  "duration": 906807889,
  "status": "passed"
});
formatter.match({
  "location": "SearchTestStepDefs.verifySearchDisplayed()"
});
formatter.result({
  "duration": 294029608,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ABC",
      "offset": 12
    }
  ],
  "location": "SearchTestStepDefs.enterSearchText(String)"
});
formatter.result({
  "duration": 374613843,
  "status": "passed"
});
formatter.after({
  "duration": 324777318,
  "error_message": "java.lang.NullPointerException: Can\u0027t get item from storage: uuid can\u0027t be null\n\tat java.util.Objects.requireNonNull(Objects.java:228)\n\tat io.qameta.allure.internal.AllureStorage.get(AllureStorage.java:110)\n\tat io.qameta.allure.AllureLifecycle.prepareAttachment(AllureLifecycle.java:252)\n\tat io.qameta.allure.AllureLifecycle.addAttachment(AllureLifecycle.java:235)\n\tat io.qameta.allure.Allure.addAttachment(Allure.java:66)\n\tat com.qa.tlv.methods.BrowserUtils.attachSnapshotToReport(BrowserUtils.java:1118)\n\tat stepdefs.Hooks.afterScenario(Hooks.java:23)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:365)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeWithRerun(JUnit4Provider.java:272)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:236)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:159)\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:386)\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:323)\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:143)\n",
  "status": "failed"
});
});