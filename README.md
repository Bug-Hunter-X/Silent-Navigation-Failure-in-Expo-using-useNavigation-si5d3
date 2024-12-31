# Silent Navigation Failure in Expo using useNavigation

This repository demonstrates a subtle bug in Expo's React Navigation integration.  In certain scenarios, navigation using `useNavigation().navigate()` fails silently; no errors are thrown, and the navigation simply doesn't happen.

## The Problem

The `bug.js` file shows a minimal reproduction of the issue. A button is intended to navigate to a details screen, but under specific, hard-to-debug circumstances, the navigation action fails without any indication of the problem.  Debugging this is challenging due to the lack of error messages or logging.

## Solution

The `bugSolution.js` file presents a potential solution.  In some instances, this issue may stem from asynchronous operations related to the navigation stack's initialization.  This solution shows one way to wrap the navigation in a `useEffect` to resolve the issue.